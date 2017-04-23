var express = require('express');
var router = express.Router();
const db = require('../collections')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.user.findOne({}, function(err, data){
    console.log(data);
    console.log(data.name);
    res.render('index', { title: 'WenDa', user: data});
  });
});

module.exports = router;
