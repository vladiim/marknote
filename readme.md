# Marknote

* Note taking app in markdown
* Jekyl inspired simplicity
* iPhone, iPad, iApp
		* Later: text editor, api, web, url app (turns html to md then saves)
* Syncs across devices
* Syncs to Evernote (later github, dropbox)
* Manage notes by
		- Title
		- Tags
		- Date created/edited
		- Location written/edited

***

# Dependencies

* Xcode
* Phonegap `sudo npm install -g phonegap`
* Cordova `sudo npm install -g cordova`
* Ruby 2.0.0
* Rubygems `bundle install`

***

# Coffeescript

All test files are edited in `test/coffee` all files are managed and edited in `coffee`. In order to automate the build from coffeescript to javascript run `guard`.

***

# Testing

* Unit tests run `scripts/test.sh`
* End-to-end (e2e) testing
		- Install protractor `npm install -g protractor`
		- Start selenium web-server `./scriptes/selenium.sh`, note this requires a [Java Runtime Environment](http://www.oracle.com/technetwork/java/javase/downloads/jre7-downloads-1880261.html) and a [Java Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html)
		- Run the tests `./node_modules/protractor/bin/protractor config/protractor.config.js`

<!-- * For end-to-end tests, start the server `scripts/web-server.js` and run `scripts/e2e-test.sh`, then visit [http://localhost:8000/test/e2e/runner.html](http://localhost:8000/test/e2e/runner.html) -->

***

# Dev mode

* Run `scripts/web-server.js`
* Then go to [http://localhost:8000/www/index.html](http://localhost:8000/www/index.html)

***

# Compiling

* Test on ios `$ phonegap run ios`

***

# WIP

* Set up SCSS
* View notes
* Search notes
		- By title, date
* Create & manage note on iPhone
* Save note to server

TODO:

* Angular
* UI: top coat
* Abstract device features
		- notification
		- storage
		- online/offline
		- mouse/touch
		- etc
* Event listeners: ftlabs/fastclick
* Set up hardware accelerator
* When setting up pages have:
		- right (right of viewport)
				* css: .right { left: 100%; } # slow, not hardware accelerated
				* .page { transform: translate3d(0, 0, 0); }
				* .right { transform: translate3d(-100%, 0, 0); } # fast!
		- centre
		- left (left of VP)
		- To change views, change the class name
* Add css html { -webkit-touch-callout: none; -webkit-tap-highligh-color: rgba(0,0,0) }
* Compilers: coffeescript, scss, guard