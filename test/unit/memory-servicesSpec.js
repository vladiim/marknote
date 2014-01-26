(function() {
  var $httpBackend;

  $httpBackend = {};

  describe("MarkNote memory-services", function() {
    beforeEach(module("markNote"));
    return describe("Notes", function() {
      beforeEach(inject(function($injector) {
        $httpBackend = $injector.get("$httpBackend");
        return this.notes = $injector.get("Notes");
      }));
      afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        return $httpBackend.verifyNoOutstandingRequest();
      });
      return describe("#getAll()", function() {
        return it("retrieves the notes from memory", function() {
          angular.fromJson = function(data) {
            return data;
          };
          $httpBackend.expectGET("data/notes/notes.json").respond("Notes from memory");
          this.notes.getAll().success(function(data) {
            return expect(data).toEqual("Notes from memory");
          });
          return $httpBackend.flush();
        });
      });
    });
  });

}).call(this);
