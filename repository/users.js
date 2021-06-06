const { User: Users, UserStatistic } = require("../models");

const getAll = async (query) => {
  const { sortBy, sortByDesc, filter, limit = 50, offset = 0 } = query;
  const options = {
    offset,
    limit,
    attributes: [
      "id",
      "first_name",
      "last_name",
      "email",
      "gender",
      "ip_address",
      "createdAt",
      "updatedAt",
    ],
    include: [
      {
        model: UserStatistic,
        attributes: [`page_views`, `clicks`],
        required: true,
      },
    ],
  };
  const order = [];
  if (sortBy) {
    order.push([`${sortBy}`]);
    options.order = order;
  }
  if (sortByDesc) {
    order.push([`${sortByDesc}`, `DESC`]);
    options.order = order;
  }
  if (filter) {
    const attributes = filter.split("|");
    options.attributes = attributes;
  }
  const { count, rows: users } = await Users.findAndCountAll(options);
  return {
    total: count,
    limit,
    offset,
    users,
  };
};
const getById = async (id) => {
  const user = await Users.findOne({
    where: {
      id,
    },
  });
  return user;
};
module.exports = {
  getAll,
  getById,
};
