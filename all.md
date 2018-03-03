---
title: All Documents
layout: none
---

{% for page in site.pages %}
{% if forloop.first %}
# Pages
{% endif %}
- [{{ page.title }}]({{ page.url }})
{% endfor %}

{% for collection in site.collections %}
{% if forloop.first %}
{% if site[collection.label][0]  %}
# Collections
{% endif %}
{% endif %}
  {% for page in site[collection.label] %}
    {% if forloop.first %}
## {{ collection.label }}
    {% endif %}
  - [{{ page.title }}]({{ page.url }})
  {% endfor %}
{% endfor %}

{% for page in site.static_files %}
{% if forloop.first %}
# Static Files
{% endif %}
- [{{ page.name }}]({{ page.path }})
{% endfor %}
