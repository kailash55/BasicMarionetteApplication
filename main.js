require([
    'Application',
], function(MyApp, factory) {
    'use strict';
    console.log(MyApp)
    var app = new MyApp()
    
    app.start()
});
