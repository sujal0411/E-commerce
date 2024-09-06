var express = require('express');
var router = express.Router();
var USERC = require('../controller/user')

router.post('/SignUp', USERC.SignUp);
router.post('/SignIn', USERC.SignIn);
router.get('/', USERC.Secure,USERC.Find);
router.patch('/:id',USERC.Secure, USERC.Update);
router.delete('/:id',USERC.Secure, USERC.Delete);

module.exports = router;
