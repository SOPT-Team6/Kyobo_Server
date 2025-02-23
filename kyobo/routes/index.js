const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/detail', require('./detail'));
router.use('/main', require('./main'));
router.use('/search', require('./search'));
module.exports = router;