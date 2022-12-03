import comment from "../moduls/comment.modul.js";
export const create = async (req,res)=>{
    try {
        const data = await comment.create(req.body)
        if(data){
            res.send({
                status:true,
                msg:"commented success ",
                data:data
            })
        }
        else{
            res.send({
                status:false,
                msg:"comment not success or id not found",
                data:data
            })
        }
    } catch (error) {
        res.send(error)
    }
}
 
export const getdata = async (req,res)=>{
        try {
        const find  = await comment.find({status:"Active"}).populate("commentdBy").populate("post_id")
        if(find){
            res.send({
                status:true,
                msg:"data find success",
                data:find
            })
        }else{
            res.send({
                status:false,
                msg:"data  not found",
                data:{}
            })
        }
    } catch (error) {
        res.send(error)
    }
}
export const deleted = async (req,res)=>{
    try {
        const deletedata  = await comment.findByIdAndDelete({_id:req.body._id})
        if(deletedata){
            res.send({
                status:true,
                msg:"data delete success",
                data:deletedata
            })
        }else{
            res.send({
                status:false,
                msg:"data  not found",
                data:{}
            })
        }
    } catch (error) {
        res.send(error)
    }
}