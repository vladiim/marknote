controllers = angular.module("markNote.controllers", [])

controllers.controller("MainCtrl", ["$route", "$location", "$routeParams", "$rootScope",
  ($route, $location, $routeParams, $rootScope) ->

    $rootScope.visitURL = (newURL) ->
      $location.url(newURL)
])

controllers.controller("NoteShowCtrl", ["$scope", "$routeParams",
  ($scope, $routeParams) ->
    # alert("note id: " + $routeParams.noteId)
])

controllers.controller("NoteListCtrl", ["$scope", "Notes",
  ($scope, Notes) ->
    Notes.getAll().success (data) -> $scope.notes = data
])