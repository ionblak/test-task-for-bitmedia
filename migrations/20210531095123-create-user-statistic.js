module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("UserStatistics", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.NUMBER,
      },
      page_views: {
        type: Sequelize.NUMBER,
      },
      clicks: {
        type: Sequelize.NUMBER,
      },
      User: {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("UserStatistic");
  },
};
