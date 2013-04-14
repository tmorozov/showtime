$(function() {
  var options = window.options || {};

  app.start(options);

  _.each(options['start_module'], function(module_info){
    var mod = app[module_info.name];
    mod.start(module_info.options);
  });
  
});
