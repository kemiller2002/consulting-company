const WORKER_BASE = "https://inquiry-intake.kemiller2002.workers.dev";

function setStatus(form, msg, isError = false) {
  const el = form.querySelector(".form-status");
  if (!el) return;
  el.textContent = msg;
  el.style.color = isError ? "crimson" : "inherit";
}

function disableForm(form, disabled) {
  Array.from(form.querySelectorAll("input, textarea, button")).forEach((el) => {
    el.disabled = disabled;
  });
}

async function submitToWorker(data) {
  console.log("start");
  const resp = await fetch(
    `${WORKER_BASE}/submit/${encodeURIComponent(data.formId)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    },
  );
  console.log("completed", data);
  const text = await resp.text();
  console.log("Worker response:", resp.status, text);

  let json;
  try {
    json = JSON.parse(text);
  } catch (err) {
    console.log("ERROR", err);
    throw new Error(
      `Bad response from server (${resp.status}): ${text.slice(0, 200)}`,
    );
  }

  if (!resp.ok || !json.ok) {
    throw new Error(json.error || `Submission failed (${resp.status})`);
  }

  return json;
}

document.querySelectorAll("form.contact-form").forEach((setupForm) => {
  setupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const formId = form.dataset.formId || "other";
    const data = Object.fromEntries(new FormData(form).entries());
    data.page = location.href;
    data.site = location.hostname;
    data.formId = formId;

    setStatus(form, "Sending…");
    disableForm(form, true);
    console.log("fired");
    try {
      const result = await submitToWorker(data);

      // Success UI
      setStatus(form, "Thanks — your message has been received.");
      form.reset();

      // If you want a quiet debug in console:
      // console.log("Saved to repo:", result.path, result.commitSha);
    } catch (err) {
      console.log(err);
      setStatus(form, err.message || "Something went wrong.", true);
    } finally {
      disableForm(form, false);
    }
  });
});
