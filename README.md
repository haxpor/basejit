# basejit
Base skeleton setup for Node project.

# Concept

basejit has necessary pre-configured setup with intention to be the base project to quickly set up and run for development.
It mainly uses

* babel - to convert ES6 code to ES5
* karma + jasmine - for test suite
* gulp - for project management and command lines usage called by NPM's run script.

basejit has `package.json` which is description file for Node project. But basejit itself wasn't published on NPM registry.
This is to allow users to modify the description, scripts, and necessary fields in `package.json` to match their needs to publish the final integrated project with basejit.

Existing source files

* src/basejit.js
* src/core/core.js
* src/core/core.util.js
* test/core/\_core.test.js

are for demonstration purpose and have skeleton code to set the whole project up included with test via jasmine.

# Consume

Use [basejit-cli](https://github.com/haxpor/basejit-cli) to create a startup project based on basejit for you.

# How to

There's centralized commands that can be used on NPM as follows

# Frequently Use
* `npm start` - to build dev version of distribution file (non-minified & non-uglified, ES2015 compatible), start local http server, and watch for file changes on `./src`. Go to `http://localhost:5050` to see the result on browser.
* `npm run build` - to build all distribution file into `.dist`
* `npm test` - to run unit test

# Others
* `npm run docs` - to generate documents via JSdoc at `./docs`
* `npm run http-and-watch` - to run local http server and watch for file changes
* `npm run clean` - to clean all output files in `./lib`, `./dist`, and `./docs`.

# License

See [LICENSE](https://github.com/haxpor/basejit/blob/master/LICENSE).
