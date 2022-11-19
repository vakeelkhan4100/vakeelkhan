import Product from "../moduls/product.modul.js";
export const create  = async (req, res) => {
    // try {
        var  allimages = [];
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
    // } catch (error) {
    //     res.send({
    //         status: false,
    //         msg: "something wrong with request .",
    //         data: {}
    //     })
    // }
}