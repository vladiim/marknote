'use strict';

var markNoteApp = angular.module('markNoteApp', []);

markNoteApp.controller('NoteListCtrl', function($scope) {
  $scope.notes = [
    { "title": "Note 1",
    "snippet": "# First note \nBlah blah:\n\n* lol\n*lol" },
    { "title": "2nd note",
    "snippet": "Smaller snippet for 2nd note" }
  ];
});

// angular.module('markNote.controllers', [])
//     .controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
//         $scope.slide = '';
//         $rootScope.back = function() {
//           $scope.slide = 'slide-right';
//           $window.history.back();
//         }
//         $rootScope.go = function(path){
//           $scope.slide = 'slide-left';
//           $location.url(path);
//         }
//     }]);
    // .controller('EmployeeListCtrl', ['$scope', 'Employee', function ($scope, Employee) {
    //     $scope.employees = Employee.query();
    // }])
    // .controller('EmployeeDetailCtrl', ['$scope', '$routeParams', 'Employee', function ($scope, $routeParams, Employee) {
    //     $scope.employee = Employee.get({employeeId: $routeParams.employeeId});
    // }])
    // .controller('ReportListCtrl', ['$scope', '$routeParams', 'Report', function ($scope, $routeParams, Report) {
    //     $scope.employees = Report.query({employeeId: $routeParams.employeeId});
    // }]);
