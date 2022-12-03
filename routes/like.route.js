import  Express  from "express";
import { create, deleted, getalldata } from "../controllers/like.controller.js";
export  const like = Express.Router();
like.route("/like/create").post(create)
like.route("/like/get").get(getalldata)
like.route("/like/delete").post(deleted)


