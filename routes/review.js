var express = require('express');
var router = express.Router();
var reviewC = require('../controller/review');
var USERC = require('../controller/user');

/* GET home page. */
router.post('/Create',USERC.Secure,reviewC.Create);
router.get('/',USERC.Secure,reviewC.Find);
router.patch('/:id',USERC.Secure,reviewC.Update);
router.delete('/:id',USERC.Secure,reviewC.Delete);

module.exports = router;
