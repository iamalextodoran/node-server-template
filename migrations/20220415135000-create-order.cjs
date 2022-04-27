export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable("Orders", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    productId: {
      type: Sequelize.INTEGER,
      references: { model: "Products", key: "id" },
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

  await queryInterface.createTable("Orders", {});
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.dropTable("Orders");
};
