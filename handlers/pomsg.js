var models  = require('../models');
var url = require('url');

module.exports = {
    all: all,
    seed: seed
}

function all(req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    console.log(query, "query");
    models.pocmsg.findAll({where: query}).then(function(users) {
      res.send({
        title: 'Sequelize: Express Example',
        pocmsgs: users
      });
    });
}

function seed(req, res) {
  models.pocmsg.bulkCreate([
    {
      poid: 1,
      warehouse: 'Warehouse 1',
      item: 'Item 1',
      podate: null,
      pomsgeq : 'Po Message EQ 1',
      pomsg : 'po message 1'
    },
    {
      poid: 2,
      warehouse: 'Warehouse 2',
      item: 'Item 2',
      podate: null,
      pomsgeq : 'Po Message EQ 2',
      pomsg : 'po message 2'
    },
    {
      poid: 3,
      warehouse: 'Warehouse 3',
      item: 'Item 3',
      podate: null,
      pomsgeq : 'Po Message EQ 3',
      pomsg : 'po message 3'
    },
    {
      poid: 4,
      warehouse: 'Warehouse 4',
      item: 'Item 4',
      podate: null,
      pomsgeq : 'Po Message EQ 4',
      pomsg : 'po message 4'
    }
  ]).then(function(users) {
    res.send({
      message: 'Seed completed',
      pocmsgs: users
    });
  });
}