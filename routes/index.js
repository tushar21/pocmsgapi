var models  = require('../models');
var express = require('express');
var router  = express.Router();
var pomsgRouter = require('./pomsg')
router.get('/', function(req, res) {
  res.send("App running")
});

router.use('/pomsg', pomsgRouter);

module.exports = router;
