import express from "express";
import category from "./routes/category.route.js";
import connectDB from "./config/db.js";
import product from "./routes/product.route.js";
import { reviewrating } from "./routes/review.rating.route.js";
import { subcategory } from "./routes/sub.category.route.js";
import user from "./routes/user.route.js"
const app = express();
app.use(express.json());
connectDB();
app.use(product)
app.use(category)
app.use(reviewrating)
app.use(subcategory)
app.use(user)
app.listen(process.env.PORT || 3000, (req, res) => {
    console.log("server is run on 3000 port");
})