require('dotenv').config()
module.exports = {
    database:
      `mongodb+srv://subhan:${process.env.MONGODB_KEY}@cluster0.ltfleae.mongodb.net/Incubation?retryWrites=true&w=majority`,
  };   