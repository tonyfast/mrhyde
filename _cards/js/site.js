---
layout: mrhyde
# use this file to scrape the important parts of the collections api
---
/** Extract pieces of the Jekyll Collection API 
  variables are loaded in as window.cards
  **/
  // automatically happens because it is in the source
  // after jekyll parses it
  
var cards = []; 
{% for card in site.cards %}{% if forloop.index > 0 %}{% comment %}Ignore first empty card{% endcomment %}
  cards[ {{forloop.index | | minus:1}} ] = {
    title: "{{card.title}}",
    path: "{{card.relative_path}}",
    url: "{{site.baseurl}}{{card.url}}",
    type: "{{card.type}}",
    layout: "{{card.layout}}"
  };
{% endif %}{% endfor %}
console.log( 'The Jekyll site contents is available in window.cards')
