import mongoose from "mongoose";
const sharemon = new mongoose.Schema({
    post_id: {
        type: String,
        required: true
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
    },
    who_share: {
        type: String,
        required: true
    },
    who_receive: {
        type: String,
        required: true
    }
})
const share = mongoose.model("share", sharemon)
export default share