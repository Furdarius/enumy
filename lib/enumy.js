'use strict';

module.exports = function(arr) {
    var input = (arr instanceof Array) ? arr : arguments;

    var res = {
        getList: function() {
            return input;
        }
    };

    for (var i = 1; i <= input.length; i++) {
        res[input[i - 1]] = i;
        res[i] = input[i - 1];
    }

    return Object.freeze(res);
};