var express = require('express');
var router = express.Router();
var AdminC = require('../controller/admin');

router.post('/SingUp', AdminC.SingUp);
router.post('/SingIn', AdminC.SingIn);
router.get('/', AdminC.Find);
router.patch('/:id', AdminC.Update);
router.delete('/:id', AdminC.Delete);

module.exports = router;
