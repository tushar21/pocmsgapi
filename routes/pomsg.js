var express = require('express');
var router  = express.Router();
const pomsgHandler = require('../handlers/pomsg');
router.get('/all', pomsgHandler.all);
module.exports = router;
