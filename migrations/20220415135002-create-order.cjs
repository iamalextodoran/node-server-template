export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable("Orders", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    orderItemId: {
      type: Sequelize.INTEGER,
      references: { model: "OrderItems", key: "id" },
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
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.dropTable("Orders");
};
