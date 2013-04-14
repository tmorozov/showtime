app.module("welcome", function(mod, app){

  app.vent.on("hello:next", function () {
    app.vent.trigger("show:next", mod.mainRegion);
  });

  mod.addInitializer(function (options) {
    // body...
    console.log("welcome module selector: ", options.region_selector);
    mod.mainRegion = new Backbone.Marionette.Region({
      el: options.region_selector
    });

    app.vent.trigger("show:hello", mod.mainRegion);
  });

});
