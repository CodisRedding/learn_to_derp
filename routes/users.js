var express = require('express');
var router = express.Router();
var crypto = require('crypto');

var iamprivate = 1;

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.body.shouldBePrivate === 1 || iamprivate === 1) {
    crypto.doSpecialThings();
    iamprivate = 2;
  }
  res.send('respond with a resource');
});

module.exports = router;
