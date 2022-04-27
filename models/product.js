import { Model } from "sequelize";

const Product = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {}
  }

  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      colors: DataTypes.ARRAY(DataTypes.TEXT),
      pictures: DataTypes.ARRAY(DataTypes.TEXT),
      sizes: DataTypes.ARRAY(DataTypes.TEXT),
    },
    {
      timestamps: false,
      sequelize,
      modelName: "Product",
    }
  );

  return Product;
};

export default Product;
