var express = require('express');
var router = express.Router();

var formWizard = require('hmpo-form-wizard');
var steps = require('./steps');
var fields = require('./fields');
var formTemplates = require('hmpo-template-mixins')(fields);

router.use(formTemplates);
router.use(formWizard(steps, fields, {
    name: 'coin-calculator',
}));

module.exports = router;
