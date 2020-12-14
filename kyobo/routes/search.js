const express = require('express');
const router = express.Router();
const searchController = require('../controllers/search');

router.get('/:keyword', searchController.searchInfo);
router.get('/popular/keyword', searchController.popularKeyword);
module.exports = router;