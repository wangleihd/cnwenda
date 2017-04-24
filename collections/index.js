const mongoose = require('mongoose');
//let url = 'mongodb://cnstu.top:27017/wenda';
let url = 'mongodb://192.168.1.11:27017/wenda';
mongoose.connect(url);

let db = mongoose.connection;

db.once('open', function(){
  console.log('connect to db ok.');
})

let Schema = mongoose.Schema;
let userShema = new Schema({
  name: String,
  passwd: String,
  email: String
});

let wendaShema = new Schema({
  title: String,
  context: String,
  issuingTime: {type: Date, default: Date.now},
  author: String,
  viewNumber: { type: Number, default: 0 },
  zanNumber: { type: Number, default: 0 },
  resolveNumber: { type: Number, default: 0 }
});

// let Wenda = mongoose.model('wenda', wendaShema);
//
// let wenda = new Wenda();
// wenda.title = "为什么会有这么多的人使用问答系统呢?";
// wenda.context = "因为这里, 会让我们学习到更多的东西";
// wenda.author = "Richard";
// wenda.save();


let User = mongoose.model('user', userShema);
module.exports.user = User;
module.exports.wenda = mongoose.model('wenda', wendaShema);
