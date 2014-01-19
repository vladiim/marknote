(function() {
  describe("MarkNote controllers", function() {
    beforeEach(module("markNote"));
    return describe("NoteListCtrl", function() {
      return it("has a 'notes' model with 2 notes", inject(function($controller) {
        var ctrl, notes, scope;
        scope = {};
        notes = {
          getAll: function() {
            return ['NOTES ARRAY'];
          }
        };
        ctrl = $controller("NoteListCtrl", {
          $scope: scope,
          Notes: notes
        });
        return expect(scope.notes).toEqual(['NOTES ARRAY']);
      }));
    });
  });

}).call(this);
