angular.module("markNote.controllers", [])
  .controller("MainCtrl", ["$route", "$location", "$routeParams",
    ($route, $location, $routeParams) ->
      @$route       = $route
      @$location    = $location
      @$routeParams = $routeParams
  ])
  .controller("NoteListCtrl", ["$scope", ($scope) ->
    $scope.notes = [
	    { title:  "Note 1", snippet: "# First note \nBlah blah:\n\n* lol\n*lol" },
	    { title: "2nd note", snippet: "Smaller snippet for 2nd note" }
    ]
  ])