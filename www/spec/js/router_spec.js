(function() {
  var requirejs;

  requirejs = require('requirejs');

  requirejs.config({
    basURL: '../../',
    paths: {
      nodeRequire: require,
      node: './node_modules',
      app: './js/app'
    }
  });

  requirejs(['node/chai/chai', 'app/router'], function(chai, router) {
    var expect;
    expect = chai.expect;
    return describe('Router', function() {
      return describe('test()', function() {
        return it("returns test", function() {
          return expect(router.test).to.eql("TEST");
        });
      });
    });
  });

}).call(this);
