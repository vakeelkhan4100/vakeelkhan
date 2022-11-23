import mongoose from "mongoose";
const category = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Active", "Deactive"],
        default: "Active"
    },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
})
const catuser = mongoose.model("category", category)
export default catuser