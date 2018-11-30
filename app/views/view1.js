define([
    'jquery',
    'underscore',
    'backbone',
    'backbone.marionette'
], function($, _, Backbone, Marionette) {
    'use strict';
    var view1 = Marionette.View.extend({
        tagName: 'p',
        template: _.template('<h1>Hello World</h1>')
    })

    return view1
});