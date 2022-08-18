(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bin'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"DELETED") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":12,"column":13}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"deleted-item\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"deleted") : depth0)) != null ? lookupProperty(stack1,"title") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":9,"column":19}}})) != null ? stack1 : "")
    + "            <p class=\"clickable\" onclick=\"undoRemove("
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"i") : depth0), depth0)) != null ? stack1 : "")
    + ")\">✔️</p>\r\n        </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <p>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"deleted") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</p>  \r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <p>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"deleted") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</p> \r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "    <p>No deleted items</p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h2>Deleted Items</h2>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"DELETED") : depth0)) != null ? lookupProperty(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":15,"column":7}}})) != null ? stack1 : "")
    + "\r\n\r\n\r\n";
},"useData":true});
})();(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['journalData'] = template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <option>"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</option>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<select>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"JOURNAL") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":4,"column":13}}})) != null ? stack1 : "")
    + "</select>";
},"useData":true});
})();(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['loginModal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"overlay\" style=\"display: grid; place-items: center;\">\r\n    <div style=\"max-height: 400px;\">\r\n        <h1 style=\"margin-top: 0px\">Quest Journal</h1>\r\n        <p>Greetings adventurer, I don't recognise you.</p>\r\n        <p>Have we met before?</p>\r\n        <div style=\"display: grid; place-items: center\">\r\n            <div>\r\n                <label for=\"choose-log\">Yes</label>\r\n                <input type=\"checkbox\" name=\"choose-log\" id=\"choose-log\" onchange=\"\r\n                   const el = document.getElementById('confirm-password')\r\n                   el.style.display = 'none'\r\n                   const other = document.getElementById('choose-reg')\r\n                   other.checked = !this.checked\r\n                   const button = document.getElementById('login-submit')\r\n                   button.textContent = 'Login'\r\n                \" checked>\r\n                <label for=\"choose-reg\">No</label>\r\n                <input type=\"checkbox\" name=\"choose-reg\" id=\"choose-reg\" onchange=\"\r\n                   const el = document.getElementById('confirm-password')\r\n                   el.style.display = 'grid'\r\n                   const other = document.getElementById('choose-log')\r\n                   other.checked = !this.checked\r\n                   const button = document.getElementById('login-submit')\r\n                   button.textContent = 'Register'\r\n                \">\r\n            </div>\r\n            \r\n        </div>\r\n        <br>\r\n        <br>\r\n        <div style=\"display: grid; place-items: center;\">\r\n            <div style=\"display: grid;\">\r\n                <label for=\"user\">Name: </label>\r\n                <input type=\"text\" name=\"user\" id=\"login-user\">\r\n            </div>\r\n            <br>\r\n            <div style=\"display: grid;\">\r\n                <label for=\"password\">Password: </label>\r\n                <input type=\"password\" name=\"password\" id=\"login-password\">\r\n            </div>\r\n            <div id=\"confirm-password\" style=\"display: none;\">\r\n                <br>\r\n                <label for=\"confirm\">Confirm password: </label>\r\n                <input type=\"password\" name=\"confirm\" id=\"login-confirm\">\r\n            </div>\r\n            <br>\r\n            <button type=\"submit\" id=\"login-submit\" onclick=\"auth(this.textContent)\">Login</button>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
})();(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['overlayLoading'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"overlay\" style=\"display: grid; place-items: center; height: 100vh;\">\r\n    <img width=\"400px\" src=\"./images/loadingWhite.gif\">\r\n</div>";
},"useData":true});
})();(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['quests'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"selected") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":28,"column":11}}})) != null ? stack1 : "");
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
    + "</p>\r\n            <p></p>\r\n            <p class=\"clickable\" onclick=\"journalRemoveQuest("
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"i") : depth0), depth0)) != null ? stack1 : "")
    + ")\">-</p>\r\n        </div>\r\n";
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
    + "</p>\r\n            <p></p>\r\n            <p class=\"clickable\" onclick=\"journalRemoveQuest("
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"i") : depth0), depth0)) != null ? stack1 : "")
    + ")\">-</p>\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"section-title\">\r\n    <h2>Quests</h2>\r\n    <p class=\"clickable\" role=\"button\" onclick=\"journalAddQuest()\">+</p>\r\n</div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"quests") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":29,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();(function() {
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
    + "</p>   \r\n        <p></p>\r\n        <p class=\"clickable\" role=\"button\" onclick=\"journalAddSub("
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"index") : depth0), depth0)) != null ? stack1 : "")
    + ")\">+</p>\r\n        <p></p>\r\n        <p class=\"clickable\" role=\"button\" onclick=\"journalRemoveTask("
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"index") : depth0), depth0)) != null ? stack1 : "")
    + ")\">-</p>\r\n        <div class=\"subtasks\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"subs") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":22,"column":21}}})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"subtask\">\r\n                    <p contenteditable=\"true\" role=\"textbox\" class=\"in-out\">"
    + container.escapeExpression(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</p>\r\n                    <p></p>\r\n                    <p class=\"clickable\" role=\"button\" \r\n                    onclick=\"journalRemoveSub("
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

  return "<div class=\"section-title\">\r\n    <h2>Tasks</h2>\r\n    <p class=\"clickable\" role=\"button\" onclick=\"journalAddTask()\">+</p>\r\n</div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"tasks") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":25,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();