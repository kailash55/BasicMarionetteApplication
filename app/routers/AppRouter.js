define([
    'backbone',
], function(Backbone) {
    'use strict';
    var appRouter = Backbone.Router.extend({

        routes:{
            '': 'home',
            '/':'home',
            'home': 'home',
            'about': 'about'
        },

        initialize: function(options){
            console.log('router initialilzed')
            this.controller = options.controller
        },

        home: function(){
            console.log('router home')
            this.controller.home()
        },
        
        about: function(){
            console.log('about page')
            this.controller.about()
        }
    })

    return appRouter;
});