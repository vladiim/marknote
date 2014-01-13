'use strict';

angular.module('markNote', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'markNote.controllers',
    'markNote.memoryServices'
]).
config(['$routeProvider', function ($routeProvider) {
    // $routeProvider.when('/employees', {templateUrl: 'partials/employee-list.html', controller: 'EmployeeListCtrl'});
    // $routeProvider.otherwise({redirectTo: '/employees'});
}]);