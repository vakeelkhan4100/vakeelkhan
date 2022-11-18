import express from "express";
import dotenv from "dotenv"
const app = express();
app.use(express.json());

app.post("/create",(req,res)=>{
    res.send("hey vakeel khan")
})
app.listen(process.env.PORT ||3000,(req,res)=>{
    console.log("server is run on 3000 port");
})