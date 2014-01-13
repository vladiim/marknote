module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'www/lib/fat-angular.js',
      'www/lib/angular-*.js',
      'test/lib/angular/angular-mocks.js',
      'www/js/**/*.js',
      'test/unit/**/*.js'
    ],

    exclude : [
      'www/lib/angular.js'
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
