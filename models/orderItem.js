import { Model } from "sequelize";

const OrderItem = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate(models) {}
  }

  OrderItem.init(
    {
      details: DataTypes.TEXT,
      product: DataTypes.TEXT,
    },
    {
      sequelize,
      timestamps: true,
      modelName: "OrderItem",
      hooks: {
        beforeCreate: (record) => {
          record.createdAt = new Date();
          record.updatedAt = new Date();
        },
      },
    }
  );

  return OrderItem;
};

export default OrderItem;
