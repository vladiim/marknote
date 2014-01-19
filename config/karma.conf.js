module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'www/lib/angular.js',
      'www/lib/angular-touch.js',
      'www/lib/angular-animate.js',
      'www/lib/angular-resource.js',
      'www/lib/angular-route.js',
      'www/lib/angular-mocks.js',
      'www/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}
