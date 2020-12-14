const express = require('express');
const router = express.Router();
const detailController = require('../controllers/detail');

router.get('/readingbook', detailController.getReadingBookInfo);
router.get('/newbook', detailController.getNewBookInfo);

//get method에는 req.body를 잘 쓰지 않아요!
//params로 url에 같이 넘겨줄 땐 get을 써요!
//클라이언트로부터 body를 받으려면 post가 더 유용합니다!
module.exports = router;