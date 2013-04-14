app.module("welcome", function(mod, app){

  var MyView = Backbone.Marionette.ItemView.extend({
      events: {
        "click": "next"
      },
      
      next: function () {
        mod.trigger("hello:next");
      },

      render: function () {
        this.$el.html("Hello");
      }
    });

  var MyViewNext = Backbone.Marionette.ItemView.extend({
      render: function () {
        this.$el.html("Next");
      }
    });

  app.vent.on("show:hello", function (region) {
    var view = new MyView();
    region.show(view);
  });
  app.vent.on("show:next", function (region) {
    var view = new MyViewNext();
    region.show(view);
  });
});