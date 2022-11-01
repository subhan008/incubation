var express = require('express');
var router = express.Router();
const userHelpers = require('../Helpers/userHelpers')
const adminHelpers = require('../Helpers/adminHelpers')
const schema = require('../dbSchema/userSchema')

const jwt = require('jsonwebtoken')
/* GET users listing. */
const  Admin = {
  name:"admin",
  password:'123'
}

router.post('/admin/admin-login',async function(req, res, next) {  

  console.log(req.body,'sasasas');
  if(req.body.name == Admin.name && req.body.password == Admin.password){
    console.log('hi');
    const token = await jwt.sign({_id:req.bod},"123",{expiresIn:"2h"})
    console.log(token);
    res.send({token: token,admin:true});  
  }
  else res.send({admin:false,message:'Invalid name or password'})
});   

router.get('/admin/application-list',(req,res)=>{
  console.log('6666');
  adminHelpers.getApplicationLists().then((data)=>{
    console.log('kkkk');
     res.send({data:data,message:'successfuly data fetched'})
  })
})

router.post('/admin/on-view',(req,res)=>{
  console.log(req.body,'&&&&&&&');   
  adminHelpers.changeApplView(req.body).then(()=>{
    res.send({message:"updated success fuly"})
  })
})
router.post('/admin/change-status',(req,res)=>{
  console.log(req.body,'&&&&&&&*');   
  adminHelpers.changeApplStatus(req.body.id,"proceeded").then(()=>{
    res.send({message:"updated successfuly"}) 
  }) 
})
  
router.post('/admin/slot-allowcate',async(req,res)=>{
  console.log(req.body,'088888888');   
  await adminHelpers.changeApplStatus(req.body.companyId,'allowcated')
  adminHelpers.slotAllowcate(req.body).then(()=>{
    console.log('ll');      
    res.send({message:'successfuly slot allowcated'})
  })
})

router.get('/admin/slots',(req,res)=>{
  console.log('1');
  adminHelpers.getSlots().then((slots)=>{
    res.send({slotData:slots})
  })
})       

router.get('/admin/getApplData/:id',async (req,res)=>{
  console.log(req.params.id);
  const applDetails = await schema.application.findOne({_id:req.params.id})
  res.send({applDetails:applDetails})
})
  
router.post('/admin/specified-slotAllowcation',async (req,res)=>{ 
  console.log(req.body);
     await adminHelpers.changeApplStatus(req.body.id,'allowcated')
     schema.slot.updateOne({slotNumber:req.body.slotNumber},{
      $set:{
        companyId:req.body.id,
        availble:false
      }   
    }).then(()=>{
      console.log('lll');
      res.send({message:"succefuly allowacted"})   
    })
})
  
module.exports = router;
