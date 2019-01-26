var models  = require('../models');
var express = require('express');
var router  = express.Router();
var pomsgRouter = require('./pomsg')
router.get('/', function(req, res) {
  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    res.send({
      title: 'Sequelize: Express Example',
      users: users
    });
  });
});


router.use('/pomsg', pomsgRouter);

module.exports = router;
