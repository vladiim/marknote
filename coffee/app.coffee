modules = [ "ngTouch", "ngRoute", "ngAnimate",
	"markNote.controllers", "markNote.memoryServices" ]

notesOpts =
	templateUrl: "partials/note-list.html"
	controller: "NoteListCtrl"

angular.module("markNote", modules).
config(["$routeProvider", ($routeProvider) ->
	$routeProvider.when "/notes", notesOpts
	$routeProvider.otherwise { redirectTo: "/notes" }
])