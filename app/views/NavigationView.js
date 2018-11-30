define([
    'underscore',
    'backbone',
    'backbone.marionette',
    'text!app/templates/NavigationTemplate.html'
], function(_, Backbone, Marionette, NavigationViewTemplate) {
    'use strict';
    
    var NavigationView = Marionette.View.extend({
        className: "container",
        template: _.template(NavigationViewTemplate),
    })

    return NavigationView
});