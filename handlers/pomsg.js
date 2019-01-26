var models  = require('../models');
var url = require('url');

module.exports = {
    all: all
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