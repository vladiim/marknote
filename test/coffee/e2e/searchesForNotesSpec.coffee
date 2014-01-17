# https://www.exratione.com/2013/12/angularjs-headless-end-to-end-testing-with-protractor-and-selenium/
# http://www.ng-newsletter.com/posts/practical-protractor.html


# read https://github.com/angular/protractor/blob/master/docs/getting-started.md

describe "Searches for notes", ->
  beforeEach ->
  	browser.get('index.html')

  it "filters the notes list as the user types", ->
  	expect(repeater(".notes li").count()).toBe(2)
  	input(".search-notes").enter("1")
  	expect(repeater(".notes li").count()).toBe(1)

# describe('Phone list view', function() {
 
#     beforeEach(function() {
#       browser().navigateTo('../../app/index.html');
#     });
 
 
#     it('should filter the phone list as user types into the search box', function() {
#       expect(repeater('.phones li').count()).toBe(3);
 
#       input('query').enter('nexus');
#       expect(repeater('.phones li').count()).toBe(1);
 
#       input('query').enter('motorola');
#       expect(repeater('.phones li').count()).toBe(2);
#     });
#   });
# });