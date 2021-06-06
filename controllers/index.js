const Users = require("../repository/users");

const getAll = async (req, res, next) => {
  try {
    const { users, total, limit, offset } = await Users.getAll(req.query);
    console.log("запрос идет");
    return res.status(200).json({
      status: "success",
      code: 200,
      data: { total, limit, offset, users },
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const user = await Users.getById(req.params.id);

    if (user) {
      return res
        .status(200)
        .json({ status: "success", code: 200, data: { user } }); // toJSON
    }
    return res
      .status(404)
      .json({ status: "error", code: 404, message: "Not found user by id" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
};
