export const up = async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert(
    "Products",
    [
      {
        name: "DataTypes.STRING",
        description: "DataTypes.STRING",
        price: 123,
        colors: ["xs"],
        pictures: ["xs"],
        sizes: ["xs"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "DataTypes.STRING",
        description: "DataTypes.STRING",
        price: 123,
        colors: ["xs"],
        pictures: ["xs"],
        sizes: ["xs"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "DataTypes.STRING",
        description: "DataTypes.STRING",
        price: 123,
        colors: ["xs"],
        pictures: ["xs"],
        sizes: ["xs"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );

  await queryInterface.bulkInsert(
    "Orders",
    [
      {
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete("Orders", null, {});
};
