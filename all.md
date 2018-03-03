---
title: All Documents
layout: none
---

{% for collection in site.collections %}
## {{ collection.label }}
{{site.[collection.label] | jsonify }}
  {% for page in site[collection.label] %}
  - [{{ page.title }}]({{ page.url }})
  {% endfor %}
{% endfor %}
