# mockNote = ->
#   notes = {}
#   inject ($injector) ->
#     notes = $injector.get("Notes")
#   notes

# describe "MarkNote memory-services", ->

# 	beforeEach(module("markNote"))

# 	describe "Notes", ->
#     describe "#getAll()", ->
#     	it "retrieves the notes from memory", ->
#         notes = mockNote()
#         expect(notes.getAll()).toEqual ["Memory notes"]