memoryServices = angular.module("markNote.memoryServices", [])

memoryServices.factory("Notes", [
	->
		getAll: -> [
		  { title:  "Note 1", snippet: "# First note \nBlah blah:\n\n* lol\n*lol" },
		  { title: "2nd note", snippet: "Smaller snippet for 2nd note" },
		  { title:  "Note 1", snippet: "# First note \nBlah blah:\n\n* lol\n*lol" },
		  { title: "2nd note", snippet: "Smaller snippet for 2nd note" },
		  { title:  "Note 1", snippet: "# First note \nBlah blah:\n\n* lol\n*lol" },
		  { title: "2nd note", snippet: "Smaller snippet for 2nd note" }
    ]
])