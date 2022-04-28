import { Model } from "sequelize";

const Order = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.hasMany(models.OrderItem, {
        foreignKey: "orderId",
        onDelete: "cascade",
      });
    }
  }

  Order.init(
    {
      phoneNumber: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      address: DataTypes.TEXT,
      email: DataTypes.STRING,
      totalToPay: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: false,
      modelName: "Order",
    }
  );

  return Order;
};

export default Order;
