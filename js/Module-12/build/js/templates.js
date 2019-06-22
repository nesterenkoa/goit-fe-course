Handlebars.registerPartial("orm", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form>\n  <input type=\"text\" name=\"url\" placeholder=\"Please, enter URL\">\n  <input type=\"submit\" value=\"Submit\">\n</form>\n";
},"useData":true}));
this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["Form"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form>\n  <input type=\"text\" name=\"url\" placeholder=\"Please, enter URL\">\n  <input type=\"submit\" value=\"Submit\">\n</form>\n";
},"useData":true});
Handlebars.registerPartial("ist", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<p>List: </p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <li class=\"list-item\">\n      <div>\n        <a href=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "</a>\n        <button data-action=\"delete\" data-url=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\">Remove</button>\n      </div>\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.image : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        <img src="
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.image : depth0), depth0))
    + " alt=\"capture\" />\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "        <p> "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.records : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<ol class=\"list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.records : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ol>\n";
},"useData":true}));
this["MyApp"]["templates"]["List"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<p>List: </p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <li class=\"list-item\">\n      <div>\n        <a href=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "</a>\n        <button data-action=\"delete\" data-url=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\">Remove</button>\n      </div>\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.image : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        <img src="
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.image : depth0), depth0))
    + " alt=\"capture\" />\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "        <p> "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.records : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<ol class=\"list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.records : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ol>\n";
},"useData":true});