exports.config = {

  seleniumAddress: 'http://0.0.0.0:4444/wd/hub',

  specs: [ '../test/e2e/*Spec.js' ],

  capabilities: {
    "phantomjs": {
      "cli": {
        "args": ["web-security=false"]
      }
    }
  },

  baseUrl: 'http://localhost:8000/www/',

  rootElement: 'html',

  allScriptsTimeout: 11000,

  jasmineNodeOpts: {
    onComplete: function () {},
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000
  }
};