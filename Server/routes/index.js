var express = require('express');
var router = express.Router();
const userHelpers = require('../Helpers/userHelpers')
const jwt = require('jsonwebtoken')
const generateAuthToken = require('./jwt')
require('dotenv').config();

router.post('/signup',(req,res)=>{ 
  console.log(req.body,'---------------');

   userHelpers.doSignup(req.body).then((status)=>{

    console.log(status.userAdded);
   
    if (status.userAdded) {
      res.status(201).send({message:"User created successfully"})
    } else{
      res.status(409).send({message:"Invalid email or password"})
    }
  })
})

router.post('/login',(req,res)=>{ 
  console.log(req.body,'login data');
  
   userHelpers.doLogin(req.body).then((user)=>{
    console.log('222');
    
    if (user) {
      console.log(user,'pop');  

      const token = jwt.sign({_id:user._i},process.env.SECRET_KEY,{expiresIn:"7d"}) 
     console.log(token,'////');
      return res.status(201).send({token: token,message:"User logined successfully",user})
    } else{ 
      console.log('sasasa');
     return res.send({message:"user login failed",invalid:true})          
    }
  })
})

router.post('/admin',(req,res)=>{
      
})

module.exports = router;
 