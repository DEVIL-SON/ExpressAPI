const mongoose = require("mongoose");

uri = "mongodb+srv://dasaurabhneubrain:5WEu8jHvwwwgSLZs@expressapi.ylntkev.mongodb.net/";

const connectDB = () => {
    console.log("connect DB")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;