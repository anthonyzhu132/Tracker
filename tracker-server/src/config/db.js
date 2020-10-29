const mongoose = require('mongoose');
const config = require('config');
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("Mongo DB connected :)")
  } catch(err) {
    console.log(err.message)

    //Proceed to exit the entire application
    process.exit(1);
  }
}

module.exports = connectDB;