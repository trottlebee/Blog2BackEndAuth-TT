"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _auth = require("../middleware/auth.mw");

var router = (0, _express.Router)();
router.get('/me', _auth.tokenMiddleware, _auth.isLoggedIn, function (req, res) {
  res.json(req.user);
});
var _default = router;
exports.default = _default;