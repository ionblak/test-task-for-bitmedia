const { User, UserStatistic } = require("../models");
const users = require("../users.json");
const usersStatistic = require("../users_statistic.json");

const fillTheTableUsers = () => {
  users.forEach(async (item) => {
    await User.create({
      first_name: item.first_name,
      last_name: item.last_name,
      email: item.email,
      ip_address: item.ip_address,
      gender: item.gender,
    });
  });
};
const fillTheTableUsersStatistics = () => {
  usersStatistic.forEach(async (item) => {
    await UserStatistic.create({
      UserId: item.user_id,
      clicks: item.clicks,
      page_views: item.page_views,
      date: item.date,
    });
  });
};

module.exports = { fillTheTableUsersStatistics, fillTheTableUsers };
