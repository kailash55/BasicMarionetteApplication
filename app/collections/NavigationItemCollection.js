define([
    'underscore',
    'backbone',
    'models/NavigationLinkModel'
], function( _, Backbone, NavigationLinkModel) {
    'use strict';
    var NavigationItemCollection = Backbone.Collection.extend({
        model: NavigationLinkModel
    })

    return NavigationItemCollection
});