var express = require('express');
var router = express.Router();
var brandC = require('../controller/brand');
var USERC = require('../controller/user');

/* GET home page. */
router.post('/Create',USERC.Secure, brandC.Create);
router.get('/', USERC.Secure,brandC.Find);
router.patch('/:id',USERC.Secure, brandC.Update);
router.delete('/:id', USERC.Secure,brandC.Delete);

module.exports = router;
