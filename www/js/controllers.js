(function() {
  var controllers;

  controllers = angular.module("markNote.controllers", []);

  controllers.controller("MainCtrl", [
    "$route", "$location", "$routeParams", "$rootScope", function($route, $location, $routeParams, $rootScope) {
      return $rootScope.visitURL = function(newURL) {
        return $location.url(newURL);
      };
    }
  ]);

  controllers.controller("NoteShowCtrl", ["$scope", "$routeParams", function($scope, $routeParams) {}]);

  controllers.controller("NoteListCtrl", [
    "$scope", "Notes", function($scope, Notes) {
      return Notes.getAll().success(function(data) {
        return $scope.notes = data;
      });
    }
  ]);

}).call(this);
