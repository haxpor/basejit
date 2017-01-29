# basejit
Base skeleton setup for Node project.

# Concept

basejit has necessary pre-configured setup with intention to be the base project to quickly set up and run for development.
It mainly uses

* babel - to convert ES6 code to ES5
* karma + jasmine - for test suite
* gulp - for project management and command lines which included `gulp build`, `gulp unittest` and `gulp doc`.

basejit has `package.json` which is description file for Node project. But basejit itself wasn't published on NPM registry.
This is to allow users to modify the description, scripts, and necessary fields in `package.json` to match their needs to publish the final integrated project with basejit.

Existing source files

* src/basejit.js
* src/core/core.js
* src/core/core.util.js
* test/core/\_core.test.js

are for demonstration purpose and have skeleton code to set the whole project up included with test via jasmine.

# Usage

Use [basejit-cli](https://github.com/haxpor/basejit-cli) to create a startup project based on basejit for you.

# License

See [LICENSE](https://github.com/haxpor/basejit/blob/master/LICENSE).
