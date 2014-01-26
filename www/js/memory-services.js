(function() {
  var memoryServices;

  memoryServices = angular.module("markNote.memoryServices", []);

  memoryServices.factory("Notes", [
    "$http", function($http) {
      return {
        getAll: function() {
          return $http.get("data/notes/notes.json").success(function(data) {
            return angular.fromJson(data);
          });
        }
      };
    }
  ]);

}).call(this);
