var _ = require('underscore');
var denominations = [1, 2, 5, 10, 20, 50, 100, 200];

var Coins = {

    getChange: function (value) {
        var coins = [];
        var value = Math.round(parseInt(value));

        while (value > sum(coins)) {
            coins.push(this.getMaxOfArray(denominations, value - sum(coins)));
        }

        return coins;
    },

    getMaxOfArray: function (array, limit) {
        return _.chain(array)
            .filter(function (i) { return !limit || i <= limit })
            .max()
            .value();
    },

    toString: function (value) {
        return value > 99 ? "£" + Coins.convertDown(value) : value + 'p';
    },

    toValue: function (str) {
        str = String(str);
        if (str.indexOf("£") > -1 && str.indexOf(".") === -1) {
            return Coins.convertUp(str.replace(/[^0-9]+/g, ""));
        } else {
            return str.replace(/[^0-9]+/g, "");
        }
    },

    convertDown: function (value) {
        return parseInt(value) / 100;
    },

    convertUp: function (value) {
        return parseInt(value) * 100;
    }

};

function sum (arr) {
    return arr.reduce(add, 0);
}

function  add (a, b) {
    return a + b;
}

module.exports = Coins;
