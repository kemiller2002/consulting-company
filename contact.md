---
layout: default
title: Contact
---

<section id="contact">
  <div class="section-heading">
    <div>
      <span class="eyebrow">Contact</span>
      <h1>Let’s talk</h1>
      <p class="lead">Bring the messiest system, the looming launch, or the diligence sprint. We’ll respond quickly with next steps.</p>
    </div>
  </div>

  <div class="columns">
    <div class="card">
      <h3>What to expect</h3>
      <ul>
        <li>A short working call to understand the stakes and urgency</li>
        <li>Clear next actions within 48 hours</li>
        <li>Option to start with a focused diagnostic sprint</li>
      </ul>
      <p class="mute"><em>Prefer email?</em> Reach Kevin at <strong>kevin@echelonfoundry.com</strong>.</p>
    </div>
    <div class="form-card">
      <form
        action="https://formspree.io/f/mblkyndy"
        method="POST"
        name="contact"
        id="contact-form"
        netlify-honeypot="bot-field"
      >
        <div class="stack">
          <div>
            <label for="name">Your name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label for="message">How can we help?</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>
          <button type="submit" class="button primary">Send</button>
        </div>
      </form>
    </div>
  </div>
</section>
