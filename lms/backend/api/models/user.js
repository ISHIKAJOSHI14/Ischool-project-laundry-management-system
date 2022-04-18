 const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://test:test123@cluster0.mqg2h.mongodb.net/lmsDatabase?retryWrites=true&w=majority', {useNewUrlParser: true});
var conn =mongoose.Collection;
 
var userSchema =new mongoose.Schema({
  name: String,
  email: String,
  password: String,
 
});
 
var userModel = mongoose.model('Users', userSchema);
module.exports=userModel;