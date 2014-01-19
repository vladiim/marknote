(function() {
  var controllers;

  controllers = angular.module("markNote.controllers", []);

  controllers.controller("MainCtrl", [
    "$route", "$location", "$routeParams", function($route, $location, $routeParams) {
      this.$route = $route;
      this.$location = $location;
      return this.$routeParams = $routeParams;
    }
  ]);

  controllers.controller("NoteListCtrl", [
    "$scope", "Notes", function($scope, Notes) {
      return $scope.notes = Notes.getAll();
    }
  ]);

}).call(this);
