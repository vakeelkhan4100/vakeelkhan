import Product from "../moduls/product.modul.js";
import product from "../routes/product.route.js";
export const create = async (req, res) => {
    try {
        var allimages = [];
        req.files.forEach(image => {
            var imagetype = ''
            if (image.mimetype == 'image/png') {
                imagetype = 'png'
            } else if (image.mimetype == 'image/jpg' || 'image/jpeg') {
                imagetype = 'jpg'
            }
            var imagedata = {
                path: image.filename,
                fullpath: "localhost:3000/" + image.path,
                type: imagetype,
            }
            allimages.push(imagedata)
        });
        req.body.images = allimages
        const exits = await Product.findOne({ name: req.body.name })
        if (exits) {
            res.send({
                status: false,
                msg: "name is already exits",
                data: {}
            })
        } else {
            const createpro = await Product.create(req.body)
            if (createpro) {
                res.send({
                    status: true,
                    msg: "product create successfully ",
                    data: createpro
                })
            }
            else {
                res.send({
                    status: false,
                    msg: "product not  create ",
                    data: {}
                })
            }
        }
    } catch (error) {
        res.send({
            status: false,
            msg: "something wrong with request .",
            data: {}
        })
    }
}
 
export const get_data =async (req,res)=>{
   try {
        const data = await Product.find({ status: "Active" }).sort({'id':-1}).populate("subcatId")
        if (data) {
            res.send({
                status: true,
                msg: "data fetch successs",
                data: data
            })
        }
        else {
            res.send({
                status: false,
                msg: "data not found",
                data: {}
            })
        }
    } catch (error) {
        res.send(error)
    }
}
export const is_popular = async (req, res) => {
    const data = await Product.find({ is_popular: true }).sort({ 'id': -1 }).populate("subcatId")
    if (data.length > 0) {
        res.send({
            status: true,
            msg: "all data fetch success",
            data: data
        })
    }
    else {
        res.send({
            status: false,
            msg: "product not found",
            data: {}
        })
    }
}
export const is_best = async (req, res) => {
    const data = await Product.find({ is_best: true }).sort({ 'id': -1 }).populate("subcatId")
    if (data.length > 0) {
        res.send({
            status: true,
            msg: "all data fetch success",
            data: data
        })
    }
    else {
        res.send({
            status: false,
            msg: "product not found",
            data: {}
        })
    }
}


export const search = async (req, res) => {
    // var where = {}
    // if(req.body.name){
    //    where.name= req.body.name
    // }

    const find = await Product.findOne({ name: req.body.name })
    if (find) {
        res.send({
            status: true,
            msg: "data find succes",
            data: find

        })

    }
    else {
        res.send({
            status: false,
            msg: "product is not found",
            data: {}
        })
    }
} 