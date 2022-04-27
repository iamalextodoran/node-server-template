import { Model } from "sequelize";

const Order = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.hasMany(models.OrderItem, { foreignKey: "orderId" });
    }
  }

  Order.init(
    {},
    {
      timestamps: false,
      sequelize,
      modelName: "Order",
    }
  );

  return Order;
};

export default Order;
