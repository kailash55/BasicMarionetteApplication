define("Application",[
    'backbone',
    'backbone.marionette',
    'backbone.radio',
    'app/routers/AppRouter',
    'app/controllers/AppController'
], function(Backbone, Marionette, rad, AppRouter, AppController) {
    const MyApp = Marionette.Application.extend({
        region: '#root-element',
        
        initialize(options) {

            this.on('wrapper:show', function (appView) {
                console.log('wrapper shown')
                this.showView(appView);
            });

           console.log('Initialize');
           
           this.router = new AppRouter({
            controller: new AppController({
                vent: this
            })
            })
            
        },
        
        onBeforeStart(app, options) {
            
        },
        
        onStart(app, options) {
            console.log('app started')
            Backbone.history.start();
        }
        
    });
        
    return MyApp
});




