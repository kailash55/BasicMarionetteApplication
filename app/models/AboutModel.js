define([
    'underscore',
    'backbone'
], function( _, Backbone) {
    'use strict';
    var AboutModel = Backbone.Model.extend({
        defaults:{
            title: 'About',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
        }
    })

    return AboutModel
});