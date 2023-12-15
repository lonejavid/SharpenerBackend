const path = require('path');
const express=require('express');
const contactUsController=require('../controller/contactUs');
const router=express.Router();
router.get('/contact',contactUsController.contactUs);

module.exports=router;