import express from "express";
import dotenv from "dotenv"
import category from "./routes/category.route.js";
const app = express();
app.use(express.json());
app.use(category)
// app.post("/create",(req,res)=>{
//     res.send("hey vakeel khan mai")
// })
app.listen(process.env.PORT ||3000,(req,res)=>{
    console.log("server is run on 3000 port");
})