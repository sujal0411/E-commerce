var express = require('express');
var router = express.Router();
var orderC = require('../controller/order');
var USERC = require('../controller/user');

/* GET home page. */
router.post('/Create',USERC.Secure, orderC.Create);
router.get('/',USERC.Secure, orderC.Find);
router.patch('/:id',USERC.Secure, orderC.Update);
router.delete('/:id',USERC.Secure, orderC.Delete);

module.exports = router;
