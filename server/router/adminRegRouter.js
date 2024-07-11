const express=require('express');
const router=express.Router();

const {Register,Login,SingleView,Delete,Update}=require('../controller/adminReg');
router.post('/register',Register);
router.post('/login',Login);
router.get('/singleview/:id',SingleView);
router.delete('/delete/:id',Delete);
// router.put('/update/:id',Update);

module.exports=router;