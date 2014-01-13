'use strict';

describe('MarkNote controllers', function() {
  describe('NoteListCtrl', function() {
  	beforeEach(module('markNoteApp'));

  	it("has a 'notes' model with 2 notes", inject(function($controller) {
  		var scope = {},
  		    ctrl  = $controller('NoteListCtrl', { $scope: scope });

      expect(scope.notes.length).toBe(2);
  	}));
  });
});