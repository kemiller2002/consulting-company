---
layout: default
title: Home
---

<div class="hero">
  <h1>Engineering Precision. Strategic Insight.</h1>
  <a href="#services" class="cta">Explore Services</a>
</div>

<section id="services">
  <h2>What We Offer</h2>
  <div class="grid">
    <div class="card">
      <h3>Legacy Modernization</h3>
      <p>Transform and optimize legacy systems for scalability, performance, and integration.</p>
    </div>
    <div class="card">
      <h3>Microservices Architecture</h3>
      <p>Design and implement modular services to accelerate deployment and reduce coupling.</p>
    </div>
    <div class="card">
      <h3>Cloud Migration</h3>
      <p>Move infrastructure, apps, and data to the cloud with minimal disruption and cost efficiency.</p>
    </div>
    <div class="card">
      <h3>AI/ML Integration</h3>
      <p>Identify practical AI opportunities and embed machine learning in your operations.</p>
    </div>
    <div class="card">
      <h3>Value Impact Analysis</h3>
      <p>Quantify technical changes and create clarity around architecture ROI and investment trade-offs.</p>
    </div>
    <div class="card">
      <h3>Agile Assessments</h3>
      <p>Evaluate current delivery culture and recommend process and tooling enhancements.</p>
    </div>
    <div class="card">
      <h3>Financial Analysis for Investors</h3>
      <p>Technical due diligence for early-stage investment or M&A in software-heavy companies.</p>
    </div>
  </div>
</section>

<section class="grid grid-cols-1 md:grid-cols-3 gap-6">
  {% for study in site.data.case-studies.caseStudies %}
  <div class="card">
    <a href="{{ study.url }}" class="block bg-white rounded shadow p-6 hover:shadow-lg transition">
      {% if study.thumbnail %}
        <img src="{{ study.thumbnail }}" alt="{{ study.title }}" class="rounded mb-4">
      {% endif %}
      <h3 class="text-xl font-bold mb-2">{{ study.title }}</h3>
      <p class="text-gray-600 mb-3">{{ study.summary }}</p>
      <p class="text-sm text-gray-400">{{ study.category }}</p>
    </a>
  </div>
{% endfor %}

</section>
