import  Express  from "express";
import { imageUpload } from "../services/image.service.js";
import { create } from "../controllers/product.controller.js";
const product = Express.Router();
product.route("/product/create").post(imageUpload.array("product_upload",10),create)
export default product