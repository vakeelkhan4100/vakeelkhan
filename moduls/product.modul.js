import mongoose from "mongoose"
import ProductImages from "./product.image.modul.js";
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    // ,
    // createdBy: {
    //     type: mongoose.Schema.Types.ObjectId, ref: 'users'
    // }
    
    subcatId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'subcategories'
    },
    is_popular: {
        type: Boolean,
        enum:[true,false],
        default:false
    },
    is_best: {
        type: Boolean,
        enum:[true,false],
        default:false
    },
    description: {
        type: String,
        required: false
    },
    images: [ProductImages],
    status: {
        type: String,
        enum: ["Active", "Deactive"],
        default: "Active"
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})
const Product = mongoose.model("products", ProductSchema);
export default Product;