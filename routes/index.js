const express= require('express');
const router=express.Router();

const homeController=require('../controllers/home_controller');

router.get('/',homeController.home);
router.get('/login',homeController.login);
router.get('/signup',homeController.signup);
router.get('/goodbye',homeController.goodbye);
router.get('/forgotPassword',homeController.forgotPassword);
router.get('/changePassword',homeController.changePassword);
router.get('/admin',homeController.admin);

router.use('/user',require('./user'));
router.use('/posts', require('./posts'));
router.use('/comments', require('./comments'));
router.use('/likes', require('./likes'));
router.use('/adminPanel',require('./adminPanel'));
router.use('/article',require('./article'));


module.exports=router;