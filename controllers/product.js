const Product = require("../models").Product;

module.exports = {
  getProducts: (req, res) => {
    Product.findAll({})
      .then((products) => res.status(200).json({ products }))
      .catch((err) => res.status(400).json({ err }));
  },
};
