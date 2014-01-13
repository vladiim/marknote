describe 'testing', ->
  it 'blah', ->
  	require ['js/router'], (router) ->
  		expect(router.test).toEqual('TEST')