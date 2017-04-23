var express = require('express');
var router = express.Router();
const db = require('../collections')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.wenda.find({}, function(err, data){
    console.log(data);
    console.log(data.name);
    res.render('index', { title: 'WenDa', data: data});
  });
});

module.exports = router;
