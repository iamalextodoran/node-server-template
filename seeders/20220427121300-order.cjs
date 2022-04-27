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
        name: "DataTypes.STRING 2",
        description: "DataTypes.STRING 2",
        price: 123123,
        colors: ["sm"],
        pictures: ["sm"],
        sizes: ["sm"],
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
        phoneNumber: "DataTypes.STRING",
        firstName: "DataTypes.STRING",
        lastName: "DataTypes.STRING",
        address: "DataTypes.TEXT",
        email: "DataTypes.STRING",
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
        orderId: 1,
        details: "Size: xs",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 1,
        orderId: 1,
        details: "Size: xxl",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 1,
        orderId: 1,
        details: "Size: xl",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete("Products", null, {});
  await queryInterface.bulkDelete("Orders", null, {});
  await queryInterface.bulkDelete("OrderItems", null, {});
};
