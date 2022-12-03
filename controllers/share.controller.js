import share from "../moduls/share.modul.js";
export const create = async (req, res) => {
    try {
        const Share = await share.create(req.body)
        if (Share) {
            res.send({
                status: true,
                msg: "post share successfully",
                data: Share
            })
        }
        else {
            res.send({
                status: false,
                msg: "post not  share  ",
                data: {}
            })
        }
    } catch (error) {
        res.send(error)
    }
}

export const get_data = async (req, res) => {
    try {
        const find = await share.find({ status: "Active" })
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
export const remove = async (req, res) => {
    try {
        const data = await share.findByIdAndDelete({ _id: req.body._id })
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
                msg: "data not deleted",
                data: {}
            })
        }
    } catch (error) {
        res.send(error)
    }
}