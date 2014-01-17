notesOpts =
	templateUrl: "partials/note-list.html"
	controller: "NoteListCtrl"

angular.module("markNote", [
	"ngRoute",
	"markNote.controllers",
	"markNote.memoryServices"
]).
config(["$routeProvider", ($routeProvider) ->
	$routeProvider.when "/notes", { templateUrl: "www/partials/note-list.html", controller: "NoteListCtrl" }
	$routeProvider.otherwise { redirectTo: "/notes" }
	return
])

# 'use strict';

# angular.module('markNote', [
#     'ngTouch',
#     'ngRoute',
#     'ngAnimate',
#     'markNote.controllers',
#     'markNote.memoryServices'
# ]).
# config(['$routeProvider', function ($routeProvider) {
#     // $routeProvider.when('/employees', {templateUrl: 'partials/employee-list.html', controller: 'EmployeeListCtrl'});
#     // $routeProvider.otherwise({redirectTo: '/employees'});
# }]);