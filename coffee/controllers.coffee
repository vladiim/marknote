angular.module("markNote.controllers", [])
  .controller("MainCtrl", ["$scope", ($scope) ->
  ])
  .controller("NoteListCtrl", ["$scope", ($scope) ->
    $scope.notes = [
	    { title:  "Note 1", snippet: "# First note \nBlah blah:\n\n* lol\n*lol" },
	    { title: "2nd note", snippet: "Smaller snippet for 2nd note" }
    ]
  ])

# markNoteApp.controller "NoteListCtrl", ($scope) ->
#   $scope.notes = [
#     { title:  "Note 1", snippet: "# First note \nBlah blah:\n\n* lol\n*lol" },
#     { title: "2nd note", snippet: "Smaller snippet for 2nd note" }
#   ]