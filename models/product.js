const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "price must be Included"]
    },
    feature: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.9,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

    company: {
        type: String,
        enum: {
        values: ["bislery", "Balaji", "Random Company", "Zomato","Plastic company", "timesofindia","hindustantimes","toycompany"],
            message: `{VALUE} is not Supported`,
        },
    },

});

module.exports = mongoose.model("Product", productSchema);

