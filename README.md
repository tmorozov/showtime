showtime
========

How to use Backbone Marionette Modules with Pipeline

app/assets/javascript/application.js - requires all js files in proper order

app/assets/javascript/app.js - creates Marionette application

app/assets/javascript/init.js - starting point of application, 
it'll start all modules encounted in options['start_module'] array

take a look at 
views/welcome/index.html.erb - in view we could set options and list needed modules

in 
views/layouts/application.html.erb - we include all .js files at the bottom of <body>

modules will have separate directories, and each module could be splitted in diferent files
to prevent them from autostarting we use this line:

app.module("welcome", { startWithParent: false });
