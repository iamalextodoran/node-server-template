import models from "../models/index.js";

const Order = models.Order;
const Product = models.Product;

const getOrders = (req, res) => {
  const id = req.params.id || 1;

  Order.findOne({ where: { id }, include: Product })
    .then((orders) => res.status(200).json(orders))
    .catch((err) => res.status(400).json({ err, msg: "Something's wrong!" }));
};

export { getOrders };
