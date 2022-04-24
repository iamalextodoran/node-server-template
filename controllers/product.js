import { isAuth } from "../util.js";
import models from "../models/index.js";

const Product = models.Product;

const createProduct = (req, res) => {
  const { name, description, price, category, colors, sizes } = req.body;

  const pictures = req.files.map(({ path }) => process.env.SERVER + path);

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
      .catch((err) => res.status(400).json({ err, msg: "Something's wrong!" }));

  isAuth(req, res, next);
};

const updateProduct = (req, res) => {
  const { name, description, price, category, colors, sizes } = req.body;

  const pictures = req.files.map(({ path }) => process.env.SERVER + path);

  const next = () =>
    Product.findOne({ where: { id: req.params.id } })
      .then((product) => {
        if (!product) return res.status(206).json({});

        product
          .update({
            name,
            description,
            price,
            category,
            colors,
            sizes,
            pictures: !!pictures.length ? pictures : product.pictures,
          })
          .then((product) => res.status(202).json({ product }));
      })
      .catch((err) => res.status(400).json({ err, msg: "Something's wrong!" }));

  isAuth(req, res, next);
};

const getProducts = (req, res) => {
  Product.findAll()
    .then((products) => res.status(200).json({ products }))
    .catch((err) => res.status(400).json({ err, msg: "Something's wrong!" }));
};

const getProduct = (req, res) => {
  if (!req.params.id) res.status(400).json({ msg: "No product id" });

  Product.findByPk(req.params.id)
    .then((product) => {
      if (product) {
        res.status(200).json({ product });
      } else {
        res.status(404).json({ msg: "No product with this id" });
      }
    })
    .catch((err) => res.status(400).json({ err, msg: "Something's wrong!" }));
};

const deleteProduct = (req, res) => {
  if (!req.params.id) res.status(400).json({ msg: "No product id" });

  const next = () =>
    Product.destroy({ where: { id: req.params.id } })
      .then((product) => {
        if (product) {
          res.status(200).json({ product });
        } else {
          res.status(404).json({ msg: "No product with this id" });
        }
      })
      .catch((err) => res.status(400).json({ err, msg: "Something's wrong!" }));

  isAuth(req, res, next);
};

export { createProduct, updateProduct, getProduct, getProducts, deleteProduct };
