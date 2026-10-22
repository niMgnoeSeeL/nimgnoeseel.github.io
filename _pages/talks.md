---
layout: page
permalink: /talks/
title: talks
description:
nav: true
nav_order: 3
---

<!-- Talks are listed in _data/talks.yml -->
<div class="timeline">
{% assign talks_by_year = site.data.talks | group_by: 'year' %}
{% for group in talks_by_year %}
  <div class="pub-year">{{ group.name }}</div>
  {% for talk in group.items %}
  <div class="timeline-item">
    <div class="talk-content">
      <div class="talk-left">
        <h5 class="title">{% if talk.prefix %}{{ talk.prefix }} {% endif %}<em>{{ talk.title }}</em></h5>
        {% if talk.note %}<p class="talk-context">{{ talk.note }}</p>{% endif %}
        <p class="talk-location">📍 {{ talk.location }}</p>
      </div>
      {% if talk.slides or talk.handson %}
      <div class="talk-links">
        {% if talk.slides %}<a class="btn btn-outline-primary btn-sm" href="{{ talk.slides }}">📄 Slides</a>{% endif %}
        {% if talk.handson %}<a class="btn btn-outline-success btn-sm" href="{{ talk.handson }}">💻 Hands-on</a>{% endif %}
      </div>
      {% endif %}
    </div>
  </div>
  {% endfor %}
{% endfor %}
</div>
