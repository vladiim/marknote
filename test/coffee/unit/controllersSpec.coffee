describe "MarkNote controllers", ->

	beforeEach(module("markNote"))

	describe "NoteListCtrl", ->
		it "has a 'notes' model with 2 notes", inject( ($controller) ->
			scope = {}
			ctrl  = $controller("NoteListCtrl", { $scope: scope })
			expect(scope.notes.length).toBe(2)
		)