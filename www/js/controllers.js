(function() {
  angular.module("markNote.controllers", []).controller("MainCtrl", [
    "$route", "$location", "$routeParams", function($route, $location, $routeParams) {
      this.$route = $route;
      this.$location = $location;
      return this.$routeParams = $routeParams;
    }
  ]).controller("NoteListCtrl", [
    "$scope", function($scope) {
      return $scope.notes = [
        {
          title: "Note 1",
          snippet: "# First note \nBlah blah:\n\n* lol\n*lol"
        }, {
          title: "2nd note",
          snippet: "Smaller snippet for 2nd note"
        }
      ];
    }
  ]);

}).call(this);
