define(function(require) {
  runSpecs = function(router) {
    console.log('runSpecs called');

    describe('router', function() {
      console.log('describe called');

    	it('runSpecs', function() {
        console.log('it called');

        runs(function() {
          expect(router.test).toEqual('TEST');
        });
    	})
    })
  };

  return {
  	runSpecs: runSpecs
  };
});