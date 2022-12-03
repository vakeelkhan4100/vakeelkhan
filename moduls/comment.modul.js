import mongoose from "mongoose";
const commented = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    post_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'products'
    },
    commentdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'users'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ["Active", "Unactive"],
        default: "Active"
    },
})
const comment = mongoose.model("comment", commented)
export default comment
