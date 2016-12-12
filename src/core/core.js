'use strict';

module.exports = function() {
    var Basejit = function() {
        var me = this;
        return me;
    };

    Basejit.globalText = "Test";
    Basejit.dynamicText;    // to be set via mockContext for testing purpose later

    return Basejit;
};
