const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log('MongoDB Connected:');
    }
        catch (error) {
        console.error(`MongoDB connection failed: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;