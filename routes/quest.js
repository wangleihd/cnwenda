var express = require('express');
var router = express.Router();
const db = require('../collections');

router.get('/', function(req, res, next){
  res.render('quest', {title: 'Quest'});
});

router.post('/', function(req, res, next){
  console.log(req.body);
  console.log('post url');
  if(req.body.title && req.body.context){
    var quest = new db.wenda(req.body);
    quest.save();
    res.send('save ok!');
  }


});

module.exports = router;
