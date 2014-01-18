(function() {
  var modules, notesOpts;

  modules = ["ngTouch", "ngRoute", "ngAnimate", "markNote.controllers", "markNote.memoryServices"];

  notesOpts = {
    templateUrl: "partials/note-list.html",
    controller: "NoteListCtrl"
  };

  angular.module("markNote", modules).config([
    "$routeProvider", function($routeProvider) {
      $routeProvider.when("/notes", notesOpts);
      return $routeProvider.otherwise({
        redirectTo: "/notes"
      });
    }
  ]);

}).call(this);
