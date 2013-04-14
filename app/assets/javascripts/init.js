$(function() {
  var options = window.options || {};

console.log("app1");
  app.start(options);

console.log("app2");
  _.each(options['start_module'], function(module_info){
    var mod = app[module_info.name];
    mod.start(module_info.options);
  });
  
});
