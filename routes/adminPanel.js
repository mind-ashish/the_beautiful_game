const express= require('express');
const router=express.Router();
const adminPanelController=require('../controllers/adminPanel_controller');

router.get('/createArticle',adminPanelController.home); //url: /adminPanel/createArticles


module.exports = router;