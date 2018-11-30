define([
    'underscore',
    'backbone',
    'backbone.marionette',
    'text!app/templates/HeaderTemplate.html'
], function( _, Backbone, Marionette, Template) {
    'use strict';
    var HeaderView = Marionette.View.extend({
        template: _.template(Template)
    })
    return HeaderView
});