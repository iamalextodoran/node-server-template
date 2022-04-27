export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable("OrderItems", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    orderId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { model: "Orders", key: "id" },
    },
    productId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { model: "Products", key: "id" },
    },
    details: {
      allowNull: true,
      type: Sequelize.TEXT,
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
  await queryInterface.dropTable("OrderItems");
};
