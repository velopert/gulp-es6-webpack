'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _articles = require('./routes/articles');

var _articles2 = _interopRequireDefault(_articles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/', _express2.default.static(__dirname + '/../dist'));

app.get('/hello', function (req, res) {
    return res.send('Can you hear me?');
});

app.use('/articles', _articles2.default);

var server = app.listen(3000, function () {
    console.log('Express listening on port 3000');
});