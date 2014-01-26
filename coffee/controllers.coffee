controllers = angular.module("markNote.controllers", [])

controllers.controller("MainCtrl", ["$route", "$location", "$routeParams",
  ($route, $location, $routeParams) ->
    @$route       = $route
    @$location    = $location
    @$routeParams = $routeParams
])

controllers.controller("NoteListCtrl", ["$scope", "Notes",
  ($scope, Notes) ->
    Notes.getAll().success (data) -> $scope.notes = data
])