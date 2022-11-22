import user from "../moduls/user.modul.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const signup = async (req,res)=>{
     try {
        const isemailexits = await user.findOne({email:req.body.email})
        const isnumberexits = await user.findOne({number:req.body.number})
        if(isemailexits){
            res.send({
                status:false,
                msg:"email is already exits .",
                data:{}
            })
        }else if(isnumberexits){
            res.send({
                status:false,
                msg:"number is already exits .",
                data:{}
            })
        }else{
            var otp = Math.floor(1000 + Math.random() * 9000);
            req.body.otp =otp
            var passhash = await bcrypt.hash(req.body.password,10)
            req.body.password = passhash
            const create = await user.create(req.body)
            if(create){
                create.token = await jwt.sign({time:Date(),reateId:create.id},"deshwali")
                res.send({
                    status:true,
                    msg:"signup successfully",
                    data:create
                })
            }
            else{
                res.send({
                    status:false,
                    msg:" is not create data",
                    data:{}
                })
            }
        }
     } catch (err) {
        res.send({
            status:true,
            msg:"something wrong with request .",
            data:{}
        })
     }
}

export const login = async(req,res) =>{
    var getUserData = await user.findOne({email:req.body.email});
    if(getUserData){
       let checkPass = await bcrypt.compare(req.body.password,getUserData.password)
       if(checkPass){
          getUserData.token = await jwt.sign({time:Date(),userId:getUserData._id},"coaching")
          res.send({
             status:true,
             msg:"Login Succesfully",
             data:getUserData
          })
       }else{
          res.send({
             status:false,
             msg:"Invalid Password given.",
             data:{}
          })
       }
    }else{
       res.send({
          status:false,
          msg:"Email not found",
          data:{}
       })
    }
 }
 export const getAllUsers = async(req,res) =>{
   //  var where  = {}
   //  if(req.query.email){
   //    where.email = req.query.email
   //  }
   //  if(req.query.username){
   //     where.username = req.query.username
   //  }
    const data = await user.find({status:"Active"})
    if(data.length > 0){
       res.send({
          status:true,
          msg:"user data fetch successfully.",
          data:data
       })
    }else{
       res.send({
          status:false,
          msg:"No data found",
          data:[]
       })
    }
    res.send(data)
 }
 
 export const update = async(req,res) =>{
    try{
    const data = await user.findByIdAndUpdate({_id:req.body.id},req.body)
    if(data){
       res.send({
          status:true,
          msg:"update successfully.",
          data:data
       })
    }else{
       res.send({
          status:false,
          msg:"data found with given id or something wrong with update",
          data:{}
       })
    }
 }catch(err){
    res.send({
       status:false,
       msg:"data found with given id or something wrong with update",
       data:{}
    })
 }
 }
 
 
 export const deleteUser = async(req,res) =>{
    try{
    const data = await user.findByIdAndDelete({_id:req.body.id})
    if(data){
       res.send({
          status:true,
          msg:"Deleted successfully.",
          data:data
       })
    }else{
       res.send({
          status:false,
          msg:"notnot",
          data:{}
       })
    }
 }catch(err){
    res.send({
       status:false,
       msg:"Something wrong with request.",
       data:{}
    })
 }
 }
 
 export const ResendOtp = async(req,res) =>{
       try{
          var otp = Math.floor(1000 + Math.random() * 9000);
          req.body.otp = otp;
          const data = await user.findOne({number:req.body.number},req.body)
          if(data){
             res.send({
                status:true,
                msg:"Otp resend successfully.",
                data:data
             })
          }else{
             res.send({
                status:false,
                msg:"data not found with given id",
                data:{}
             })
          }
       }catch(err){
          res.send({
             status:false,
             msg:"Something went wrong with request.",
             data:{}
          })
       }
 }
 
 export const VerifyOtp = async(req,res) =>{
       const checkOtp = await user.findOne({number:req.body.number,otp:req.body.otp})
       if(checkOtp){
          var dataToBeUpdate = {};
          dataToBeUpdate.number_verified = true;
          await user.findByIdAndUpdate({_id:checkOtp._id},dataToBeUpdate)
          checkOtp.number_verified = true;
          res.send({
             status:true,
             msg:"Otp Verified succesfully.",
             data:checkOtp
          });return;
       }else{
          res.send({
             status:false,
             msg:"Invalid Otp or mobile no. given.",
             data:{}
          });return;
       }
 }
 
 export const ResetPassword = async(req,res) =>{
    const checkUserExist = await user.findOne({_id:req.body._id})
    if(checkUserExist){
       let checkPass = await bcrypt.compare(req.body.old_pass,checkUserExist.password)
       if(checkPass){
             var dataToBeUpdate = {};
             const passwordHash = await bcrypt.hash(req.body.new_pass,10)
             dataToBeUpdate.password = passwordHash;
             await user.findByIdAndUpdate({_id:checkUserExist._id},dataToBeUpdate)
          res.send({
             status:true,
             msg:"Password Reset Succesfully",
             data:checkUserExist
          })
       }else{
          res.send({
             status:false,
             msg:"Invalid Old Password given.",
             data:{}
          })
       }
    }else{
       res.send({
          status:false,
          msg:"user not found with given ID.",
          data:{}
       });return;
    }
 }