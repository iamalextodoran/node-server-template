export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable("Products", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.INTEGER,
    },
    colors: {
      defaultValue: [],
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
    pictures: {
      defaultValue: [],
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
    sizes: {
      defaultValue: [],
      type: Sequelize.ARRAY(Sequelize.TEXT),
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
  await queryInterface.dropTable("Products");
};
