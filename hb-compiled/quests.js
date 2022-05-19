(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['quests'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"selected") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":24,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"quest selected\">\r\n            <p onclick=\"SELECTED_INDEX = "
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"i") : depth0), depth0)) != null ? stack1 : "")
    + "; drawJournal();\" \r\n            class=\"clickable\" role=\"checkbox\">\r\n                ●\r\n            </p>\r\n            <p></p>\r\n            <p contenteditable=\"true\" role=\"textbox\" class=\"in-out\">"
    + container.escapeExpression(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</p>\r\n            <p></p>\r\n            <p class=\"clickable\">-</p>\r\n        </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"quest\">\r\n            <p onclick=\"SELECTED_INDEX = "
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"i") : depth0), depth0)) != null ? stack1 : "")
    + "; drawJournal();\" \r\n            class=\"clickable\" role=\"checkbox\">\r\n                ○\r\n            </p>\r\n            <p></p>\r\n            <p contenteditable=\"true\" role=\"textbox\" class=\"in-out\">"
    + container.escapeExpression(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</p>\r\n            <p></p>\r\n            <p class=\"clickable\">-</p>\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"quests") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":25,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();