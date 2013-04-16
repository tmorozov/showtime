app.module("welcome", function(mod, app){

  mod.on("hello:next", function () {
    app.vent.trigger("show:next", mod.layout.userRegion);
  });

  mod.AppLayout = Backbone.Marionette.Layout.extend({
    template: "#welcome-layout-template",

    regions: {
      userRegion: "#user-data",
      selectorRegion: "#user-selector"
    }
  });


  mod.addInitializer(function (options) {
    // body...
    console.log("welcome module selector: ", options.region_selector);

    mod.mainRegion = new Backbone.Marionette.Region({
      el: options.region_selector
    });

    mod.layout = new mod.AppLayout();
    mod.mainRegion.show(mod.layout);

    app.vent.trigger("show:hello", mod.layout.userRegion);
  });

});
