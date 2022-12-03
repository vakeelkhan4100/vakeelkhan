import like from "../moduls/like.modul.js";
export const create = async(req,res)=>{
   try {
    const data = await like.create(req.body)
    if(data){
        res.send({
            status:true,
            msg:"jo aapne like kiya wo ho gga he ",
            data:data
        })
    }
    else{
        res.send({
            status:false,
            msg:"jo aapne like kiya like  nhi hua he ",
            data:{}
        })
    }
   } catch (error) {
    res.send(error)
   }
}
export const getalldata = async (req, res) => {
    try {
        const find = await like.find({ status: "Active" })
        if (find) {
            res.send({
                status: true,
                msg: "data fetch success",
                data: find
            })
        }
        else {
            res.send({
                status: false,
                msg: "data not fetch",
                data: {}
            })
        }
    } catch (error) {
        res.send(error)
    }
}
export const deleted = async (req, res) => {
    try {
        const data= await like.findByIdAndDelete({_id:req.body._id})
        if (data) {
            res.send({
                status: true,
                msg: "data delete success",
                data: data
            })
        }
        else {
            res.send({
                status: false,
                msg: "data not delete",
                data: {}
            })
        }
    } catch (error) {
        res.send(error)
    }
}