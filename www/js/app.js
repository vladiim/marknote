(function() {
  var notesOpts;

  notesOpts = {
    templateUrl: "partials/note-list.html",
    controller: "NoteListCtrl"
  };

  angular.module("markNote", ["ngRoute", "markNote.controllers", "markNote.memoryServices"]).config([
    "$routeProvider", function($routeProvider) {
      $routeProvider.when("/notes", {
        templateUrl: "www/partials/note-list.html",
        controller: "NoteListCtrl"
      });
      $routeProvider.otherwise({
        redirectTo: "/notes"
      });
    }
  ]);

}).call(this);
