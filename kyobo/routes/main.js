const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main');

router.get('/Rb', mainController.getRb);
router.get('/Nb', mainController.getNb);

module.exports=router