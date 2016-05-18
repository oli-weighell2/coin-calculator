# COIN CALCULATOR
Calculates the minimum coins (sterling) for a given amount.

## Prerequisites
[Node](http://nodejs.org/) v0.10.29 or above (only tested up to v4.1.0).

## Installation
```
$> npm install
```

## Running
```
$> npm start
```
Then open http://localhost:3000/ in a browser.

## Developer notes

- **Coin calculation**: see /models/coins.js.
- **Amount validation**: see /routes/fields.js
- **CSS**: see /assets/sass. Once updated, css files will need to be recompiled by running:
```
$> npm run postinstall
```
- **HTML**: see /views/pages/index.html and /views/partials/form.html.
- **Form configuration**: the app uses the HMPO form wizard to abstract the form building process. Fields and step behaviour can be configured from routes/fields.js and routes/steps.js. See /node_modules/hmpo-form-wizard/readme for more details.

## Unit tests

To run the tests:
```
$> npm run test
```
For details see /tests/unit - this includes some basic tests of the change calculator.

## Resources

Coin Calculator uses:
- Express as a web application framework
- Hogan as a templating engine
- Boostrap as a css framework
- Node-sass as a sass compiler
- The HMPO form-wizard as a form handler

## Todo
- Add comments
- Add unit tests to cover validation and formatting
- Improve error handling
- Add client-side validation
- Refactor coins model to allow configurable denominations
