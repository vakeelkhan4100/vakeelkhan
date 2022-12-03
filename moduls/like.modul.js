import mongoose from "mongoose";
const likeschema = new mongoose.Schema({
    like_by:{
        type:String,
        required:true
    },
    post_id:{
         type:String,
         required:true
    },
    status: {
        type: String,
        enum: ["Active", "Unactive"],
        default: "Active"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})
const like = mongoose.model("like",likeschema)
export default like