const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main');

router.get('/', mainController.getRb);
router.get('/', mainController.getNb);

module.exports=router