import express from "express";
import category from "./routes/category.route.js";
import connectDB from "./config/db.js";
const app = express();
app.use(express.json());
connectDB();
app.use(category)
app.listen(process.env.PORT || 3000, (req, res) => {
    console.log("server is run on 3000 port");
})