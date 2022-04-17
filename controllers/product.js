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
    Product.findAll()
      .then((products) => res.status(200).json({ products }))
      .catch((err) => res.status(400).json({ err }));
  },

  getProduct: (req, res) => {
    if (!req.params.id) res.status(400).json({ msg: "No product id" });

    Product.findByPk(req.params.id)
      .then((product) =>
        product
          ? res.status(200).json({ product })
          : res.status(404).json({ msg: "No product with this id" })
      )
      .catch((err) => res.status(400).json({ err }));
  },
};
