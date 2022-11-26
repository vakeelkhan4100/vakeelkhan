import Express from "express";
import { imageUpload } from "../services/image.service.js";
import { create, get_data, is_best, is_popular, search } from "../controllers/product.controller.js";
const product = Express.Router();
product.route("/product/create").post(imageUpload.array("product_upload", 10), create)
product.route("/product/get_data").get(get_data)
product.route("/product/is_popular").get(is_popular)
product.route("/product/is_best").get(is_best)
product.route("/product/search").post(search)



export default product