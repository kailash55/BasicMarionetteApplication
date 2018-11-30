define([
    'jquery',
    'underscore',
    'backbone',
    'backbone.marionette',
    'text!commonTemplates/DropdownTemplate.html'
], function( $, _, Backbone, Marionette, Template) {
    'use strict';

    var DropdownView = Marionette.View.extend({
         template: _.template(Template),
         element: "select",
         onRender: function(){
             
         }
    })

    return DropdownView
})