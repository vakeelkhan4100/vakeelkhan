import mongoose from "mongoose";
const connectDB = async () => {
    const conn = await mongoose.connect("mongodb+srv://vakeel:vakeel4100@pixel.rjqqvvg.mongodb.net/?retryWrites=true&w=majority",);
    console.log("host-----",conn.connection.host)
};
export default connectDB 