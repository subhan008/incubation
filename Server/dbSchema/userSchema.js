const  collection = require("../config/collection") ;
const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
   fname:String,
   lname:String,
   email:String,
   phone:String,
   password:String
});  

const applicationShema = new mongoose.Schema({
   name: { type: String, required: true },
   address: { type: String, required: true },
   city: { type: String, required: true },
   state: { type: String, required: true },
   email: { type: String, required: true },
   phone: { type: String, required: true },
   companyName: { type: String, required: true },
   DescribeYourTeamAndBackground: { type: String, required: true },
   DescribeYourCompanyAndProducts: { type: String, required: true },
   DescribeTheProblem: { type: String, required: true },
   WhatsUniqe: { type: String, required: true }, 
   view: { type: Boolean}, 
   status: { type: String}, 

   // WhatsYourValueProptoCustomer: { type: String, required: true },
   // CompetitorsAndYourAdvantage: { type: String, required: true },
   // RevenueModel: { type: String, required: true },
   // PotentiialMarketSize: { type: String, required: true },
   // MarketingPlan: { type: String, required: true },
   // TypeOfIncubation: { type: String, required: true },
   // BuisnessProposel: { type: String, required: true },
   // UserId: { type: String, required: true },
   // Status: { type: String, required: true },
   // View: { type: Boolean, required: true },
}) 

const slotSchema = mongoose.Schema({
   slotNumber:Number,
   companyId:String,  
   timeStamp:Date,  
   availble:Boolean,
})

const slot = mongoose.model(collection.SLOT_COLLECTION , slotSchema)

const application = mongoose.model( collection.APPLICATION , applicationShema )

const userData = mongoose.model(collection.USER_COLLECTION, userSchema);

module.exports = {userData,application,slot};   