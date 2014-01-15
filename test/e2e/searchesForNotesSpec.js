(function() {
  describe("Searches for notes", function() {
    beforeEach(function() {
      return browser().navigateTo('../../www/index.html');
    });
    return it("filters the notes list as the user types", function() {
      expect(repeater(".notes li").count()).toBe(2);
      input(".search-notes").enter("1");
      return expect(repeater(".notes li").count()).toBe(1);
    });
  });

}).call(this);
