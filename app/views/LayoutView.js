define([
    'underscore',
    'backbone',
    'backbone.marionette',
    'text!app/templates/LayoutTemplate.html'
], function( _, Backbone, Marionette, Template) {
    'use strict';

    var LayoutView = Marionette.View.extend({
        className: 'app-layout',
        template: _.template(Template),
        regions: {
            header: '#header-panel',
            navigation: '#navigation-panel',
            content: '#content-panel'
        }
    })

    return LayoutView
});