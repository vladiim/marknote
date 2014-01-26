memoryServices = angular.module("markNote.memoryServices", [])

memoryServices.factory("Notes", ["$http", ($http) ->
	getAll: -> $http.get("data/notes/notes.json").
    success (data) -> angular.fromJson(data)
])