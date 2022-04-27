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
    ],
    {}
  );

  await queryInterface.bulkInsert(
    "OrderItems",
    [
      {
        productId: 1,
        details: "Size: xs",
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
        orderItemId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete("Products", null, {});
  await queryInterface.bulkDelete("OrderItems", null, {});
  await queryInterface.bulkDelete("Orders", null, {});
};
