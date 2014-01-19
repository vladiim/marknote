(function() {
  var memoryServices;

  memoryServices = angular.module("markNote.memoryServices", []);

  memoryServices.factory("Notes", [
    function() {
      return {
        getAll: function() {
          return [
            {
              title: "Note 1",
              snippet: "# First note \nBlah blah:\n\n* lol\n*lol"
            }, {
              title: "2nd note",
              snippet: "Smaller snippet for 2nd note"
            }, {
              title: "Note 1",
              snippet: "# First note \nBlah blah:\n\n* lol\n*lol"
            }, {
              title: "2nd note",
              snippet: "Smaller snippet for 2nd note"
            }, {
              title: "Note 1",
              snippet: "# First note \nBlah blah:\n\n* lol\n*lol"
            }, {
              title: "2nd note",
              snippet: "Smaller snippet for 2nd note"
            }
          ];
        }
      };
    }
  ]);

}).call(this);
