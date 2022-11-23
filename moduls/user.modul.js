import mongoose from "mongoose";
const userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    },
    createdAt:
    {
        type: Date,
        default: Date.now
    },
    updatedAt:
    {
        type: Date,
        default: Date.now
    },
    token:{
        type: String,
        required: false
    },
    otp:{
        type: Number,
        required: false
    },
    email_verified:{
        type:Boolean,
        required:false,
        default:false
    },
   number_verified:{
        type:Boolean,
        required:false,
        default:false
    }
})
const  user = mongoose.model("users",userschema)
export default user