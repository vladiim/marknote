$httpBackend = {}

describe "MarkNote memory-services", ->

	beforeEach(module("markNote"))

	describe "Notes", ->
		beforeEach(inject( ($injector) ->
			$httpBackend = $injector.get("$httpBackend")
			@notes       = $injector.get("Notes")
		))

		afterEach ->
      $httpBackend.verifyNoOutstandingExpectation()
      $httpBackend.verifyNoOutstandingRequest()

		describe "#getAll()", ->
			it "retrieves the notes from memory", ->
        angular.fromJson = (data) -> data
        $httpBackend.expectGET("data/notes/notes.json").respond("Notes from memory")
        @notes.getAll().success( (data) ->
        	expect(data).toEqual("Notes from memory"))
        $httpBackend.flush()