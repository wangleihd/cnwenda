var express = require('express');
var router = express.Router();
const db = require('../collections')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.wenda.find({}, [], {sort: {issuingTime: -1}}, function(err, data){
    res.render('index', { title: 'WenDa', data: data});
  });
});

module.exports = router;
