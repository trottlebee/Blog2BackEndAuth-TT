"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _blogs = _interopRequireDefault(require("./blogs"));

var _auth = _interopRequireDefault(require("./auth"));

var _users = _interopRequireDefault(require("./users"));

var _auth2 = require("../middleware/auth.mw");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.use('/auth', _auth.default);
router.route('*').post(_auth2.tokenMiddleware, _auth2.isLoggedIn).put(_auth2.tokenMiddleware, _auth2.isLoggedIn).delete(_auth2.tokenMiddleware, _auth2.isLoggedIn);
router.use('/blogs', _blogs.default);
router.use('/users', _users.default);
var _default = router;
exports.default = _default;