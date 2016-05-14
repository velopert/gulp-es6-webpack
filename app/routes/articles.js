'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use(function (req, res, next) {
    console.log('Time: ', Date.now().toString());
    next();
});

router.get('/', function (req, res) {
    res.send('articles');
});

router.get('/read/:id', function (req, res) {
    res.send('You are reading article: ' + req.params.id);
});

exports.default = router;