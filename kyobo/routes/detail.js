const express = require('express');
const router = express.Router();
const detailController = require('../controllers/detail');

router.post('/readingbook', detailController.getReadingBookInfo);
router.post('/newbook', detailController.getNewBookInfo);

module.exports = router;