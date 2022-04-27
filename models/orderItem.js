import { Model } from "sequelize";

const OrderItem = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate(models) {
      OrderItem.hasOne(models.Product, { foreignKey: "id" });
    }
  }

  OrderItem.init(
    {
      details: DataTypes.TEXT,
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
      modelName: "OrderItem",
      timestamps: true,
    }
  );

  return OrderItem;
};

export default OrderItem;
