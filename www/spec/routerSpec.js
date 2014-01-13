(function() {
  describe('testing', function() {
    return it('blah', function() {
      return require(['js/router'], function(router) {
        return expect(router.test).toEqual('TEST');
      });
    });
  });

}).call(this);
