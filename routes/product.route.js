import Express from "express";
import { imageUpload } from "../services/image.service.js";
import { create, getall } from "../controllers/product.controller.js";
const product = Express.Router();
product.route("/product/create").post(imageUpload.array("product_upload", 10), create)
product.route("/product/getall").get(getall)
export default product