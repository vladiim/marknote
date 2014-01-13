require.config
  baseUrl: "./"
  urlArgs: 'cb=' + Math.random()
  paths:
    jquery: 'js/helpers/jquery'
    jasmine: 'spec/lib/jasmine-1.2.0/jasmine'
    "jasmine-html": 'spec/lib/jasmine-1.2.0/jasmine-html'
    spec: 'spec'
  shim:
    jasmine:
      exports: 'jasmine'
    'jasmine-html':
      deps: ['jasmine']
      exports: 'jasmine'

runSpecs = ->
  define (require) ->
    $          = require('jquery')
    jasmine    = require('jasmine-html')
    jasmineEnv = jasmine.getEnv()

    jasmineEnv.updateInterval = 1000
    htmlReporter = new jasmine.HtmlReporter()
    jasmineEnv.addReporter(htmlReporter)

    jasmine.specFilter = (spec) ->
      htmlReporter.specFilter(spec)

    specs = []
    specs.push("spec/routerSpec")

    $ ->
      require(specs, ->
        jasmineEnv.execute())

runSpecs()