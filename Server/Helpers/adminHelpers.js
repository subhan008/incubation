const schema = require('../dbSchema/userSchema')
const bcrypt = require('bcrypt')
module.exports = {
    getApplicationLists:()=>{
        return new Promise(async (resolve,reject)=>{
            const applData = await schema.application.find()
            console.log(applData);
            resolve(applData)
        })
    },
    changeApplView:(data)=>{
        
        return new Promise((resolve,reject)=>{
            schema.application.updateOne({_id:data.id},{
                $set:{
                  view:true  
                }
            },
            { upsert: true }).then((e)=>{
                
               resolve()
            })
            
        })
    },
    changeApplStatus:(id,status)=>{
        console.log(id,status,'?');
        return new Promise((resolve,reject)=>{
            schema.application.updateOne({_id:id},{
                $set:{
                  status:status 
                }
            },
            { upsert: true }).then(()=>{
               resolve()
            })
        })
    },
    slotAllowcate:(data)=>{
        
        return new Promise(async (resolve,reject)=>{  
            console.log('as');
            const slot = await schema.slot.findOne({availble:true})
            schema.slot.updateOne({_id:slot._id},{
                $set:{
                    availble:false,
                    companyId:data.companyId,
                    timeStamp:data.timeStamp
                }
            }).then(()=>{
                console.log('www');    
            })
     
        })
    },
    getSlots:()=>{ 
 
        console.log('222');
        return new Promise(async (resolve,reject)=>{
          
            schema.slot.find().then((data)=>{
                console.log(data,'kkk');
                resolve(data)
            })
        })
    }
}