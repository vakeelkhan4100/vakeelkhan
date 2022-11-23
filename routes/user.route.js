import { deleteUser, mailsend, getAllUsers, login, ResendOtp, ResetPassword, signup, update, VerifyOtp, Forgetpass } from "../controllers/user.controller.js";
import Express from "express";
const user = Express.Router();
user.route("/user/signup").post(signup)
user.route("/user/login").post(login)
user.route("/user/get-all-users").get(getAllUsers)
user.route("/user/update").put(update);
user.route("/user/delete").delete(deleteUser);
user.route("/user/resend-otp").post(ResendOtp);
user.route("/user/verify-otp").post(VerifyOtp);
user.route("/user/reset-password").post(ResetPassword)
user.route("/user/mailsend").post(mailsend)
user.route("/user/forgetPass").post(Forgetpass)
export default user
