# Marknote

* Note taking app in markdown
* Jekyl inspired simplicity
* iPhone, iPad, iApp
		* Later: text editor, web, url app (turns html to md then saves)
* Syncs across devices
* Syncs to Evernote (later github, dropbox)
* Manage notes by
		- Title
		- Tags
		- Date created/edited
		- Location written/edited

***

# Dependencies

* Phonegap `sudo npm install -g phonegap`
* Cordova `sudo npm install -g cordova`
* Ruby 2.0.0
* Rubygems `bundle install`

***

# Coffeescript

All test files are edited in `spec/coffee` all files are managed and edited in `js/coffee`. In order to automate the build from coffeescript to javascript run `guard`.

***

# Testing

* Install mocha `npm install -g mocha`
* Run test `mocha /path/to/file/or/dir`

***

# Compiling

* Test on ios `$ phonegap run ios`

***

# WIP

1. Get phonegap build working
2. Create & manage note on iPhone
3. Save note to server

TODO:

* Template with handlebars
* notesAdapter.findById that gets an in memory note
* Route function
* Use require.js
* To require html = require("text!views/note.html")
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