document.addEventListener("DOMContentLoaded", () => {
  const includeElements = document.querySelectorAll("[data-include]");

  includeElements.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    if (file) {
      const res = await fetch(file);
      if (res.ok) {
        el.innerHTML = await res.text();
      } else {
        el.innerHTML = `<p>Failed to load ${file}</p>`;
      }
    }
  });
});
