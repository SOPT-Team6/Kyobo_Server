const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main');

router.get('/', mainController.getRb);
router.get('/', mainController.getNb);

//두 경로가 같아버리면 원하는대로 api를 전달 못 할 수 있어요! 
//그래서 두 api가 반환하는 값이 다르다면 경로를 따로 설정해주는 게 좋아요!
module.exports=router