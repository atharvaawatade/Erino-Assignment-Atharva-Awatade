const mongoose = require('mongoose');

const mongoURI = 'add your string link here from compass';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
