---
layout: default
title: Hello World
body_classes: [page--index]
centered: true
---

<div class="hero-section" markdown="1">
## Hi, I'm David. 👋

I lead product teams that build amazing things on the internet.

This is my web&nbsp;site.&nbsp;💥 
</div>

<nav class="social-group">
<ul>
{% for social in socials %}
<li class="social social--{{ social.text | downcase }}">
  <a class="social__link" rel="me" href="{{social.url}}">
    <i class="{{ social.iconset | default: 'fab' }} fa-{{ social.icon }} social__icon"></i>
    <span class="social__text">{{ social.text }}</span>
  </a>
</li>
{% endfor %}
</ul>
</nav>