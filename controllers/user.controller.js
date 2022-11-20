// import user from "../moduls/user.modul.js";
// import bcrypt from "bcrypt"
// import jwt from "jsonwebtoken"
// export const signup = async (req,res)=>{
//      try {
//         const isemailexits = await user.findOne({email:req.body.email})
//         const isnumberexits = await user.findOne({number:req.body.number})
//         if(isemailexits){
//             res.send({
//                 status:false,
//                 msg:"email is already exits .",
//                 data:{}
//             })
//         }else if(isnumberexits){
//             res.send({
//                 status:false,
//                 msg:"number is already exits .",
//                 data:{}
//             })
//         }else{
//             var otp = Math.floor(1000 + Math.random() * 9000);
//             req.body.otp =otp
//             var passhash = await bcrypt.hash(req.body.password,10)
//             req.body.password = passhash
//             const create = await user.create(req.body)
//             if(create){
//                 create.token = await jwt.sign({time:Date(),reateId:create.id},"deshwali")
//                 res.send({
//                     status:true,
//                     msg:"signup successfully",
//                     data:create
//                 })
//             }
//             else{
//                 res.send({
//                     status:false,
//                     msg:" is not create data",
//                     data:{}
//                 })
//             }
//         }
//      } catch (err) {
//         res.send({
//             status:true,
//             msg:"something wrong with request .",
//             data:{}
//         })
//      }
// }
