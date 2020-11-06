const express= require('express');
const router=express.Router();

const homeController=require('../controllers/home_controller');

router.get('/',homeController.home);
router.get('/login',homeController.login);
router.get('/signup',homeController.signup);
router.get('/goodbye',homeController.goodbye);
router.get('/forgotPassword',homeController.forgotPassword);
router.get('/changePassword',homeController.changePassword);

module.exports=router;