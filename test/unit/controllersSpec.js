(function() {
  describe("MarkNote controllers", function() {
    beforeEach(module("markNote"));
    return describe("NoteListCtrl", function() {
      return it("has a 'notes' model with 2 notes", inject(function($injector) {
        var $controller, notes, scope;
        $controller = $injector.get('$controller');
        scope = {};
        return notes = {
          getAll: function() {
            return ['NOTES ARRAY'];
          }
        };
      }));
    });
  });

}).call(this);
