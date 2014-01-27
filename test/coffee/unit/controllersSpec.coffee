describe "MarkNote controllers", ->

	beforeEach(module("markNote"))

	# describe "MainCtrl", ->
 #    describe "visitURL", ->
 #      it "sets the $location.url to the path", inject( ($injector) ->
 #      	$controller = $injector.get('$controller')
 #      	rootScope   = { visitURL: -> }
 #      	location    = { url: (newURL) -> @newURL = newURL }
 #      	ctrl        = $controller("MainCtrl", { $location: location, $rootScope: rootScope })
 #      	ctrl.$rootScope.visitURL("New URL")
 #      	expect(location.newURL).toEqual("New URL")
 #      )

		# it "has a 'notes' model with 2 notes", inject( ($injector) ->
		# 	$controller = $injector.get('$controller')
		# 	scope = {}
		# 	notes = { getAll: -> ['NOTES ARRAY'] }
			# ctrl  = $controller("NoteListCtrl", { $scope: scope, Notes: notes })

			# expect(scope.notes).toEqual ['NOTES ARRAY']
		# )