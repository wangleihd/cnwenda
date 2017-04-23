const mongoose = require('mongoose');
let url = 'mongodb://cnstu.top:27017/wenda';
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
  authon: String,
  clickNumber: { type: Number, default: 0 },
  returnNumber: { type: Number, default: 0 },
  zanNumber: { type: Number, default: 0 }
});

let User = mongoose.model('user', userShema);


module.exports.user = User;
