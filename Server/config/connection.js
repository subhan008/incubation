require('dotenv').config()
console.log(process.env.SECRET_KEY);
module.exports = {
    database:`mongodb+srv://subhan:${process.env.SECRET_KEY}@cluster0.ltfleae.mongodb.net/Incubation?retryWrites=true&w=majority`, 
  };     