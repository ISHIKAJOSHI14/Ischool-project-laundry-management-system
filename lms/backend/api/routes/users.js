var express = require('express');
var userModel = require('../models/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  var userDetails = new userModel({
    name: 'Ishika',
    email: 'test@gmail.com',
    password: 'test@123',
    
  });
 
  userDetails.save(function(err,req1){
    if(err) throw err;
   
    res.render('index', { title: 'User Data Inserted' });
       
  })
});

module.exports = router;
