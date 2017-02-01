'use strict';

/**
 * Basejit Util
 * @namespace Basejit.util
 */
module.exports = function(Basejit) {
    var util = Basejit.util = {};

    /**
     * Return "Hello World" string
     * @return {String} "Hello World" string
     * @method returnHelloWorld
     * @memberOf Basejit.util
     */
    util.returnHelloWorld = function() {
        return "Hello World";
    }

    /**
     * Return promise object with resolved result.
     * @return {Object} Promise object
     * @method  returnPromise
     * @memberOf Basejit.util
     */
    util.returnPromise = function() {
    	return new Promise((resolve, reject) => {
    		return resolve("You did well");
    	});
    }

    /**
     * Return "Hay Hay" string
     * @return {String} "Hay Hay" string
     * @method  returnHayHay
     * @memberOf Basejit.util
     */
    util.returnHayHay = function() {
    	return "Hay Hay Hay Hay";
    }
}
