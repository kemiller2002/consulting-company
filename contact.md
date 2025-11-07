---
layout: default
title: Contact
---

<section id="contact">
  <h1>Let’s Talk</h1>

  <p>Whether you’re facing a tangled legacy system, navigating an investment decision, or untangling a web of operational complexity—Echelon Foundry can help. Reach out for a conversation, and let’s explore how we can work together to forge clarity from complexity.</p>

<!-- modify this form HTML and place wherever you want your form -->
<form
  action="https://formspree.io/f/mblkyndy"
  method="POST"
  name="contact" id="contact" data-netlify="true" netlify-honeypot="bot-field" style="max-width:600px; margin:auto;"
  name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" style="max-width:600px; margin:auto;"
>

   <p style="margin-bottom:1.5rem;">
      <label style="display:block; font-weight:600; margin-bottom:0.5rem;">Your Name:</label>
      <input type="text" name="name" required style="width:100%; padding:1rem; font-size:1rem; border:1px solid #ccc; border-radius:8px;" />
    </p>

    <p style="margin-bottom:1.5rem;">
      <label style="display:block; font-weight:600; margin-bottom:0.5rem;">Your Email:</label>
      <input type="email" name="email" required style="width:100%; padding:1rem; font-size:1rem; border:1px solid #ccc; border-radius:8px;" />
    </p>

    <p style="margin-bottom:2rem;">
      <label style="display:block; font-weight:600; margin-bottom:0.5rem;">Message:</label>
      <textarea name="message" rows="6" required style="width:100%; padding:1rem; font-size:1rem; border:1px solid #ccc; border-radius:8px;"></textarea>
    </p>

    <p style="text-align:center;">
      <button type="submit" style="background-color:#B87333; color:white; padding:0.75rem 2rem; font-size:1rem; border:none; border-radius:30px; cursor:pointer; transition: background 0.3s;">
        Send
      </button>
    </p>

</form>

<script>
    document.getElementById('contact').addEventListener('submit', async function (e) {
      e.preventDefault();

      const data = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
      };

      const res = await fetch("https://YOUR_API_ID.execute-api.YOUR_REGION.amazonaws.com/prod/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      document.getElementById('responseMsg').textContent = result.message || "Submitted!";
    });
  </script>

  <p style="text-align:center; margin-top:2rem;"><em>Prefer email?</em> You can reach Kevin directly at <strong>kevin@echelonfoundry.com</strong>.</p>
</section>
