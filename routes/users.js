var express = require('express');
var router = express.Router();
var crypto = require('crypto');

var iamlocal = 1;

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.body.shouldBePrivate === 1 || iamlocal === 1) {
    crypto.doSpecialThings();
    iamlocal = 2;
  }
  res.send('respond with a resource');
});

module.exports = router;
