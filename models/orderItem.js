import { Model } from "sequelize";

const OrderItem = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate(models) {
      OrderItem.hasOne(models.Product, {
        foreignKey: "id",
        onDelete: "cascade",
      });
    }
  }

  OrderItem.init(
    {
      details: DataTypes.TEXT,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: false,
      modelName: "OrderItem",
    }
  );

  return OrderItem;
};

export default OrderItem;
