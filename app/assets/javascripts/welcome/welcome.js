app.module("welcome", { startWithParent: false });

app.module("welcome", function(mod, app){

  console.log("mod1");

  mod.on("before:start", function(){
    console.log('welcome before');
    // do stuff before the module is started
  });

  console.log("mod2");
  mod.on("start", function(){
    console.log('welcome after');
    // do stuff after the module has been started
  });

  mod.addInitializer(function (options) {
    // body...
    console.log("mod3");
    console.log("welcome module: ", options.msg);
  });

});