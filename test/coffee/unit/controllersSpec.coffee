describe "MarkNote controllers", ->

	beforeEach(module("markNote"))

	describe "NoteListCtrl", ->
		it "has a 'notes' model with 2 notes", inject( ($controller) ->
			scope = {}
			notes = { getAll: -> ['NOTES ARRAY'] }
			ctrl  = $controller("NoteListCtrl", { $scope: scope, Notes: notes })

			expect(scope.notes).toEqual ['NOTES ARRAY']
		)