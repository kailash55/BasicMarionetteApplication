define([
    'jquery',
    'underscore',
    'backbone',
    'backbone.marionette',
    'text!app/templates/AboutTemplate.html'
], function( $, _, Backbone, Marionette, Template) {
    'use strict';
    var AboutTemplate = Marionette.View.extend({
        template: _.template(Template),
        events: {
            'click #btnOpenPdf': 'OpenPdf',
            'click #btnDownloadPdf': 'DownloadPdf',
            'click #btnPrintPdf': 'PrintPdf'
        },

        OpenPdf: function(e){
            $.ajax({ dataType: "text", type: "GET", url: "http://localhost:8084/pdf", async: true, 
            success: function (msg) {
                console.log(msg)
                 let pdfStream = msg;  
                 test.openPdf(pdfStream);  
                 //test.open(pdfStream)
                }
            });
        },

        PrintPdf: function(e){
            test.printPdf("")
        }
    })
    return AboutTemplate
});