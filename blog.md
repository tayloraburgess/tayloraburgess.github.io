---
layout: default
title: Blog Archive
---
<div class="page-content wc-container">
  <h1>Blog Archive</h1>
  <h2>Tags</h2>
  {% assign sortedtags = site.tags | sort %}
  {% for tag in sortedtags %}
    {% assign tagname = tag | first %}
      <h5>{{ tagname }}</h5>
      <ul>
        {% for post in site.posts %}
          {% if post.tags contains tagname %}
              <li>{{ post.date | date: "%b %d, %Y" }} - <a href="{{ post.url }}">{{ post.title }}</a></li>
          {% endif %}
        {% endfor %}
      </ul>
  {% endfor %}
  <h2>Years</h2>
  {% for post in site.posts %}
  	{% capture currentyear %}{{post.date | date: "%Y"}}{% endcapture %}
  	{% if currentyear != year %}
    	{% unless forloop.first %}</ul>{% endunless %}
    	<h5>{{ currentyear }}</h5>
    	<ul class="posts">
    	{% capture year %}{{currentyear}}{% endcapture %} 
  	{% endif %}
    <li>{{ post.date | date: "%b %d" }} - <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></li>
  {% endfor %}
</div>