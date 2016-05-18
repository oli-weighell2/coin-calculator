module.exports = {
    'amount': {
        formatter: [
            'trim'
        ],
        validate: [
            'required',
            { type: 'maxlength', arguments: 6 },
            { type: 'regex', arguments: /^£?(([0-9]{1,7}(,\d{3})*(\.\d{2})?)|(0\.[1-9]\d)|(0\.0[1-9]))p?$/ }
        ]
    }
};
