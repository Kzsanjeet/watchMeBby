//data base connection goes here

const mongoose = require("mongoose")



const connectDb = async () => {
    try {
        if (!process.env.CONNECT_URI) {
            console.log("Please provide a connection string");
            process.exit(1);
        }
        console.log("Attempting to connect to MongoDB Atlas...");
        await mongoose.connect(process.env.CONNECT_URI)
        console.log("Connected to database")
    } catch (error) {
        console.log("Error occurred while connecting to database: " + error);
        process.exit(1);
    }
}

module.exports = connectDb