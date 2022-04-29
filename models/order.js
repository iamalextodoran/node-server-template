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
      totalToPay: DataTypes.INTEGER,
      phoneNumber: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      trackingId: DataTypes.STRING,
      address: DataTypes.TEXT,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: true,
      modelName: "Order",
      hooks: {
        beforeCreate: (record) => {
          record.trackingId = (Math.random() + 1).toString(36).substring(2);
          record.createdAt = new Date();
          record.updatedAt = new Date();
        },
      },
    }
  );

  return Order;
};

export default Order;
