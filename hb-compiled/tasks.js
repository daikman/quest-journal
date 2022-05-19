(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tasks'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"task\">\r\n        <p contenteditable=\"true\" role=\"textbox\" class=\"in-out\">"
    + container.escapeExpression(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</p>\r\n        \r\n        <p></p>\r\n\r\n        <p class=\"clickable\" role=\"button\" onclick=\"console.log("
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"index") : depth0), depth0)) != null ? stack1 : "")
    + ")\">+</p>\r\n\r\n        <p></p>\r\n\r\n        <p class=\"clickable\" role=\"button\" onclick=\"journalRemoveTask("
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"index") : depth0), depth0)) != null ? stack1 : "")
    + ")\">-</p>\r\n        <div class=\"subtasks\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"subs") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":25,"column":21}}})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"subtask\" id=\"t"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"i") : depth0), depth0)) != null ? stack1 : "")
    + "s"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"j") : depth0), depth0)) != null ? stack1 : "")
    + "\">\r\n                    <p id=\"pt"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"i") : depth0), depth0)) != null ? stack1 : "")
    + "s"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"j") : depth0), depth0)) != null ? stack1 : "")
    + "\" contenteditable=\"true\" role=\"textbox\" class=\"in-out\">"
    + container.escapeExpression(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</p>\r\n            \r\n                    <p></p>\r\n                    <p id=\"-t"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"i") : depth0), depth0)) != null ? stack1 : "")
    + "s"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"j") : depth0), depth0)) != null ? stack1 : "")
    + "\" \r\n                        class=\"clickable\" role=\"button\" \r\n                        onclick=\"journalRemoveSub("
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"i") : depth0), depth0)) != null ? stack1 : "")
    + ", "
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"j") : depth0), depth0)) != null ? stack1 : "")
    + ")\">\r\n                        -\r\n                    </p>\r\n                </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"tasks") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":28,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();