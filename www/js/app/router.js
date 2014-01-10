(function() {
  define(function(require) {
    var start, test;
    start = function() {
      return alert('whoopsie');
    };
    test = function() {
      return 'TEST';
    };
    return {
      start: start,
      test: test
    };
  });

}).call(this);
