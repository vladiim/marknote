requirejs = require('requirejs')
# expect = require('chai').expect
# { router } = require('../../js/app/router')

console.log "lol"
requirejs.config
  basURL: '../../'
  paths:
	  nodeRequire: require
	  node: './node_modules'
	  app: './js/app'


console.log "lol"
requirejs ['node/chai/chai', 'app/router'], (chai, router) ->
	expect = chai.expect
  console.log "lol"
  console.log "router #{JSON.stringify(router, null, 4)}"

	describe 'Router', ->
	  describe 'test()', ->
	  	it "returns test", ->
	  	  expect(router.test).to.eql("TEST")