const express= require('express');
const router=express.Router();
const completeSignUpController=require('../controllers/completeSignUp_controller');

router.get('/details',completeSignUpController.details);
router.get('/players',completeSignUpController.players);
router.get('/teams',completeSignUpController.teams);
router.get('/leagues',completeSignUpController.leagues);

module.exports = router;