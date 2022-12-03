import catuser from "../moduls/category.modul.js";
export const create = async (req, res) => {
  try {
    const iscatexits = await catuser.findOne({ name: req.body.name })
    if (iscatexits) {
      res.send({
        status: false,
        msg: "name is already exits",
        data: {}
      })
    }
    else {
      var newcreate = await catuser.create(req.body)
      if (newcreate) {
        res.send({
          status: true,
          msg: "category created successfully",
          data: newcreate
        })
      }
      else {
        res.send({
          status: false,
          msg: "category is not create given .",
          data: {}
        })
      }
    }
  } catch (error) {
    res.send({
      status: false,
      msg: "internal error",
      data: {}
    })
  }
}

export const getalldata = async (req, res) => {
  try {
    const data = await catuser.find({ status: "Active" })
    if (data.length > 0) {
      res.send({
        status: true,
        msg: "data fetch success",
        data: data
      })
    }
    else {
      res.send({
        status: false,
        msg: "data not fount .",
        data: []
      })
    }
  } catch (error) {
    res.send({
      status: false,
      msg: "internal error",
      data: {}
    })
  }
}

export const GetDataByAgrigate = async (req, res) => {
  const data = await catuser.aggregate([
    {
      $match: {
        name: {$regex: req.query.search}
      },
    },
    {
      "$lookup": {
        "from": "subcategories",
        "localField": "_id",
        "foreignField": "cateId",
        "as": "subcategories"
      }
    },
    {
      "$unwind": {
        path: "$subcategories",
        preserveNullAndEmptyArrays: true
      }
    }
  ])
  res.send(data)
}