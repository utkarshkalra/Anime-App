const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();

const URI = `mongodb+srv://utkarsh:${process.env.password}@cluster0.0kg60.mongodb.net/anime?retryWrites=true&w=majority`;

const connectDB = async () => {

    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
    console.log("connection succesful at the database ");
}

module.exports = connectDB;