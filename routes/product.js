var express = require('express');
var router = express.Router();
const multer  = require('multer')
var productC = require('../controller/product');
var USERC = require('../controller/user');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + file.filename)
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/Create',USERC.Secure, upload.single('Image'),productC.Create);
router.get('/',USERC.Secure, productC.Find);
router.patch('/:id',USERC.Secure, productC.Update);
router.delete('/:id',USERC.Secure, productC.Delete);


module.exports = router;


