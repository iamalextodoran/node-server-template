const Product = require("../models").Product;

const { isAuth } = require("../util");

module.exports = {
  getProducts: (req, res) => {
    next = () =>
      Product.findAll()
        .then((products) => res.status(200).json({ products }))
        .catch((err) => res.status(400).json({ err }));

    isAuth(req, res, next);
  },

  getProduct: (req, res) => {
    next = () =>
      Product.findByPk(req.params.id)
        .then((product) => res.status(200).json({ product }))
        .catch((err) => res.status(400).json({ err }));

    isAuth(req, res, next);
  },
};
