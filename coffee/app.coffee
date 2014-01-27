modules = [ "ngTouch", "ngRoute", "ngAnimate",
	"markNote.controllers", "markNote.memoryServices" ]

notesOpts =
	templateUrl: "partials/note-list.html"
	controller: "NoteListCtrl"

noteOpts =
	templateUrl: "partials/note-show.html"
	controller: "NoteShowCtrl"

angular.module("markNote", modules).
config(["$routeProvider", ($routeProvider) ->
	$routeProvider.when "/notes", notesOpts
	$routeProvider.when "/notes/:noteId", noteOpts
	$routeProvider.otherwise { redirectTo: "/notes" }
])