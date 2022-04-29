import { Model } from "sequelize";

const Product = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {}
  }

  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      sizes: DataTypes.ARRAY(DataTypes.TEXT),
      colors: DataTypes.ARRAY(DataTypes.TEXT),
      pictures: DataTypes.ARRAY(DataTypes.TEXT),
    },
    {
      sequelize,
      timestamps: true,
      modelName: "Product",
      hooks: {
        beforeCreate: (record) => {
          record.createdAt = new Date();
          record.updatedAt = new Date();
        },
      },
    }
  );

  return Product;
};

export default Product;
