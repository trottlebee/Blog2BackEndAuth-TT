"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _table = _interopRequireDefault(require("../table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
var classTable = new _table.default('blogs');
router.get('/', function (req, res) {
  classTable.getAll().then(function (response) {
    res.send(response);
  });
});
router.get('/:id', function (req, res) {
  classTable.getOne(req.params.id).then(function (response) {
    res.send(response);
  });
});
router.post('/', function (req, res) {
  classTable.insert(req.body).then(function (response) {
    res.send(response);
  });
});
var _default = router;
exports.default = _default;