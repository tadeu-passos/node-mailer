var express = require('express');
var router = express.Router();

const handler_mail = require('../handlers/nodemail');

/* GET users listing. */
router.get('/:emailObj', handler_mail);

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
