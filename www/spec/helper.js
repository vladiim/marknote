require.config({
  baseUrl: './',

  paths: {
    app: './js/app',
    helpers: './js/helpers',
    spec: './spec',
    jquery: './js/helpers/jquery'
  }
});

afterEach(function() {
    document.getElementById('stage').innerHTML = '';
});

var helper = {
    trigger: function(obj, name) {
        var e = document.createEvent('Event');
        e.initEvent(name, true, true);
        obj.dispatchEvent(e);
    },
    getComputedStyle: function(querySelector, property) {
        var element = document.querySelector(querySelector);
        return window.getComputedStyle(element).getPropertyValue(property);
    }
};

var jasmineEnv = jasmine.getEnv();
jasmineEnv.updateInterval = 1000;

var htmlReporter = new jasmine.HtmlReporter();

jasmineEnv.addReporter(htmlReporter);

jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
};

// var currentWindowOnload = window.onload;

// window.onload = function() {
//     if (currentWindowOnload) {
//         currentWindowOnload();
//     }
//     execJasmine();
// };

// require(["spec/router_spec.js", "app/router", "helpers/jquery"], function(router_spec, router, $) {
//     $(document).ready(function() {
//         console.log('doc ready');
//     });
//     jasmineEnv.execute();

//     // router_spec.runSpecs(router);
//     describe('test', function() {
//       console.log('describe called' + it('test', function() {return 'poo';}));
//         it('test', function() {
//             console.log('it called');
//             expect(true).toEqual(false);
//         });
//     });
// });

jasmineEnv.execute()

runRouterSpecs = function() {
  return define(function(require) {
    var router      = require('app/router'),
        router_spec = require('spec/router_spec');

    // jasmineEnv.execute()

    describe('test', function() {
      it('tests shit out', function() {
        expect(true).toEqual(true);
      });
    });
  });
};

runRouterSpecs();

