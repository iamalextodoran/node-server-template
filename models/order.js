import { Model } from "sequelize";

const Order = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.hasMany(models.OrderItem, { foreignKey: "id" });
    }
  }

  Order.init(
    {
      orderItemId: {
        type: DataTypes.INTEGER,
        references: {
          key: "id",
          model: "OrderItem",
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
