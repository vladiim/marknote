// var app = {
//     // Application Constructor
//     initialize: function() {
//         this.bindEvents();
//         this.createStartPage();
//     },
//     // Bind Event Listeners
//     //
//     // Bind any events that are required on startup. Common events are:
//     // 'load', 'deviceready', 'offline', and 'online'.
//     bindEvents: function() {
//         document.addEventListener('deviceready', this.onDeviceReady, false);
//     },
//     // deviceready Event Handler
//     //
//     // The scope of 'this' is the event. In order to call the 'receivedEvent'
//     // function, we must explicity call 'app.receivedEvent(...);'
//     onDeviceReady: function() {
//         app.createHompage();
//         // app.receivedEvent('deviceready');
//     },
//     createStartPage: function() {
//         var body = $("body");
//         var html  = $("#navigation-bar").html() + $("#start-page").html();
//         var template = Handlebars.compile(html);
//         body.html(template({title: "Poop"}));
//     },
//     // Update DOM on a Received Event
//     receivedEvent: function(id) {
//         var parentElement = document.getElementById(id);
//         var listeningElement = parentElement.querySelector('.listening');
//         var receivedElement = parentElement.querySelector('.received');

//         listeningElement.setAttribute('style', 'display:none;');
//         receivedElement.setAttribute('style', 'display:block;');

//         console.log('Received Event: ' + id);
//     }
// };

define(function(require) {
  "use strict";

  var $ = require("helpers/jquery"),

      start = function() {
        alert('Router.start')
      };

  return {
    start: start
  }
});