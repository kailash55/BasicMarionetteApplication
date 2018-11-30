define([
    'underscore',
    'backbone',
    'backbone.marionette',
    'text!app/templates/UserDetails.html',
    'commonModels/DropdownModel',
    'commonViews/DropdownView'
], function(_, Backbone, Marionette, UserDetailsTemplate, DropdownModel, DropdownView) {
    'use strict';
    
    var UserDetailsView = Marionette.View.extend({
        initialize: function(){
            this.dropdownModel = new DropdownModel({
                options:[
                {value: 1, text: "Batman Begins"},
                {value: 2, text: "Batman vs Superman"},
                {value: 3, text: "Avengers"},
                {value: 4, text: "Iron Man"},
                {value: 5, text: "The Incredible Hulk"},
                {value: 6, text: "Thor"},
                {value: 7, text: "X-Men Wolverine"}
            ]});
            this.dropdownView = new DropdownView({model: this.dropdownModel})
        },
        className: "row",
        template: _.template(UserDetailsTemplate),
        regions: {
            singleSelectDropdown: "#singleSelectDropdown"
        },
        events: {
            'click .abc' : 'fireEvent'
        }, 
        fireEvent: function (e) {
            this.trigger('child:event:fired', e);
        },
        onRender: function(){
            this.showChildView('singleSelectDropdown',this.dropdownView)
        }
    })

    return UserDetailsView
});