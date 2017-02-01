/**
 * @namespace Basejit
 */

// -- basejit -- //
var Basejit = require('./core/core.js')();

require('./core/core.util.js')(Basejit);

module.exports = Basejit;
// if it's in browser environment
var isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
if (isBrowser()) {
    window.Basejit = Basejit;
}
