var util = require('util');
var _ = require('underscore');
var BaseForm = require('hmpo-form-wizard').Controller;
var Model = require('../models/coins');

var CoinForm = function () {
    BaseForm.apply(this, arguments);
}

util.inherits(CoinForm, BaseForm);

CoinForm.prototype.getValues = function (req, res, callback) {
    // calculate results if an amount has been submitted
    if (req.sessionModel.get('amount')) {
        var amount = Model.toValue(req.sessionModel.get('amount'));
        var coins = Model.getChange(amount);
        res.locals.result = coins.length;
        res.locals.amount = Model.convertDown(amount);
        res.locals.exactChange = _.map(coins, Model.toString).join(', ');
    }
    callback();
}

CoinForm.prototype.saveValues = function (req, res, callback) {
    BaseForm.prototype.saveValues.call(this, req, res, callback);
}

module.exports = CoinForm;