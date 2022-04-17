const Product = require("../models").Product;

const { isAuth } = require("../util");

module.exports = {
  createProduct: (req, res) => {
    const { name, description, price, category, colors, sizes, pictures } =
      req.body;

    const next = () =>
      Product.create({
        name,
        description,
        price,
        category,
        colors,
        sizes,
        pictures,
      })
        .then((product) => res.status(201).json({ product }))
        .catch((err) => res.status(400).json({ err }));

    isAuth(req, res, next);
  },

  getProducts: (req, res) => {
    const favorite = req.query.favorite;

    Product.findAll(favorite ? { where: { favorite } } : {})
      .then((products) => res.status(200).json({ products }))
      .catch((err) => res.status(400).json({ err }));
  },

  getProduct: (req, res) => {
    Product.findByPk(req.params.id)
      .then((product) => res.status(200).json({ product }))
      .catch((err) => res.status(400).json({ err }));
  },
};
