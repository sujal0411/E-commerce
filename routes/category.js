var express = require('express');
var router = express.Router();
var categoryC = require('../controller/category');
var USERC = require('../controller/user');

/* GET home page. */
router.post('/Create',USERC.Secure, categoryC.Create);
router.get('/',USERC.Secure,categoryC.Find);
router.patch('/:id',USERC.Secure, categoryC.Update);
router.delete('/:id',USERC.Secure, categoryC.Delete);

module.exports = router;
