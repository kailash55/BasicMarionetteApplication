define([
    'underscore',
    'backbone'
], function( _, Backbone) {
    'use strict';
    var HeaderModel = Backbone.Model.extend({
        defaults:{
            userName: 'kailash'
        }
    })

    return HeaderModel
});