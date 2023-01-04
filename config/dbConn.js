const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.DATABASE_URI);
    mongoose.set('strictQuery', false);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
