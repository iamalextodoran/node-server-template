import { Model } from "sequelize";

const Order = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.hasMany(models.Product, { foreignKey: "id" });
    }
  }

  Order.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        references: {
          key: "id",
          model: "Product",
        },
      },
    },
    {
      sequelize,
      modelName: "Order",
      timestamps: true,
    }
  );

  return Order;
};

export default Order;
