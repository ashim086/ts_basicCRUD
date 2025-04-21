import mongoose, { Schema } from "mongoose";
const productSchema = new Schema({
    name: {
        type: String,
        min: [1, "name can not be empty"],
        unique: [true, "prouct already exists"]
    },
    description: {
        type: String,
        min: [10, "decription to short"]
    },
    price: {
        type: Number,
        min: [10, "price cannot be single digit"]
    },
    category: {
        type: String,
        min: [1, "category can not be empty"]
    },
    brand: {
        type: String,
        min: [1, "brand can not be empty"]
    },
    stock: {
        type: Number,
        min: [1, "stock can not be empty"]
    },
    rating: {
        type: String,
        min: [1, "category can not be empty"]
    },
}, { timestamps: true });
export const product = mongoose.model('product', productSchema);
