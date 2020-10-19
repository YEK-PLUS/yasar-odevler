var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/MBBP1115-2021G-1', function(req, res, next) {
  res.render('MBBP1115-2021G-1');
});
router.get('/MBBP1115-2021G-1/odev-1', function(req, res, next) {
  res.render('MBBP1115-2021G-1/odev-1');
});

module.exports = router;
