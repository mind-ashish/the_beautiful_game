const express= require('express');
const router=express.Router();
const userController=require('../controllers/user_controller');

router.get('/',userController.home);
router.get('/notifications',userController.notifications);
router.get('/chatbox',userController.chatbox);
router.get('/friends',userController.friends);
router.get('/profile',userController.profile);
router.get('/post',userController.post);
router.get('/search',userController.search);
router.get('/settings',userController.settings);
router.get('/trends',userController.trends);
router.get('/deactivate',userController.deactivate);