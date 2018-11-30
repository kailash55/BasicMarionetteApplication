define([
    'jquery',
    'underscore',
    'backbone',
    'backbone.marionette',
    'text!app/templates/AppTemplate.html'
], function($, _, Backbone, Marionette, tmpl) {
    'use strict';
    
    var AppLayoutView = Marionette.View.extend({
        className: 'app-layout',
    
        template: _.template(tmpl),
    
        regions: {
          menu:    "#menu",
          content: "#content"
        }
    })

    return AppLayoutView
});