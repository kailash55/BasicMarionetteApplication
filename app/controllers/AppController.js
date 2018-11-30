define([
'require',
'jquery',
'underscore',
'backbone',
'backbone.marionette',
'models/HeaderModel',
'collections/NavigationItemCollection',
'models/NavigationLinkModel',
'models/AboutModel',
'views/AboutView',
'views/HeaderView',
'views/NavigationView',
'views/LayoutView',
'views/UserDetailsView'
], function(require ,$ ,_ , Backbone, Marionette, HeaderModel, NavigationItemCollection, NavigationLinkModel, AboutModel, AboutView, HeaderView, NavigationView, LayoutView, UserDetailsView) {
'use strict';
var showAppContent = function(layout, view){
    layout.showChildView('content', view)
}

var AppController = Marionette.MnObject.extend({

    initialize: function(options){
       this.layout = new LayoutView()

       //Initialize the header model
       var headerModel = new HeaderModel()
       var headerView = new HeaderView({
       model: headerModel
       })

       //Initalize the navigation model
       var navigationModel = new NavigationItemCollection([
       new NavigationLinkModel({linkTitle: "Home", linkLocation:"#"}),
       new NavigationLinkModel({linkTitle: "About Us", linkLocation:"#"}),
       new NavigationLinkModel({linkTitle: "Contact Us", linkLocation:"#"}),
       ])

       var navigationView = new NavigationView({
            model: navigationModel
       })

       this.layout.showChildView('header', headerView)
       this.layout.showChildView('navigation', navigationView)

       console.log('options',options)
        this.appChannel = options.vent
        this.appChannel.on('app:content:show', _.partial(showAppContent, this.layout))
        this.appChannel.triggerMethod('wrapper:show', this.layout)
    },

    home: function(){
        console.log('home')
        this.appChannel.triggerMethod('app:content:show', new UserDetailsView())    
    },

    about: function(){
        var aboutModel = new AboutModel()
        var aboutView = new AboutView({
            model: aboutModel
        })
        this.appChannel.triggerMethod('app:content:show', aboutView)    
    }

})

return AppController
});