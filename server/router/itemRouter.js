const express = require('express');
const router = express.Router();
const multer=require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/item')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })

const {Insert,View,SingleView,Delete,Update}=require('../controller/items')
router.post('/insert',Insert);
router.get('/view',View);
router.get('/singleview/:id',SingleView);
router.delete('/delete/:id',Delete);
// router.put('/update/:id',Update);

module.exports=router;