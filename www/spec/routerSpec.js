describe('testing', function() {
  it('blah', function() {
    require(['js/router'], function(router) {
      expect(router.test).toEqual('TEST');
    });
  });
});