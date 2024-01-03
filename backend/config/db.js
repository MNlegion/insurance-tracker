const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Connect to MongoDB Atlas
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.gray.bgBrightMagenta);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
