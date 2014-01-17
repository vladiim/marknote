(function() {
  describe("MarkNote controllers", function() {
    beforeEach(module("markNote"));
    return describe("NoteListCtrl", function() {
      return it("has a 'notes' model with 2 notes", inject(function($controller) {
        var ctrl, scope;
        scope = {};
        ctrl = $controller("NoteListCtrl", {
          $scope: scope
        });
        return expect(scope.notes.length).toBe(2);
      }));
    });
  });

}).call(this);
