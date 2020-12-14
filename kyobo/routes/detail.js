const express = require('express');
const router = express.Router();
const detailController = require('../controllers/detail');

router.get('/readingbook', detailController.getReadingBookInfo);
router.get('/newbook', detailController.getNewBookInfo);

module.exports = router;