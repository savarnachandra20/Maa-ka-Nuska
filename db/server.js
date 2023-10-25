const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected`);
  } catch (error) {
    console.log(error);
    throw new Error("Error");
  }
};

module.exports = { dbConnection };
