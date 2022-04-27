import models from "../models/index.js";

const Order = models.Order;
const Product = models.Product;
const OrderItem = models.OrderItem;

const getOrders = (req, res) => {
  Order.findAll({
    include: {
      model: OrderItem,
      include: {
        model: Product,
      },
    },
  })
    .then((orders) => res.status(200).json(orders))
    .catch((err) => res.status(400).json({ err, msg: "Something's wrong!" }));
};

const getOrder = (req, res) => {
  const id = req.params.id;

  OrderItem.findOne({
    where: { id },
    attributes: ["id"],
    include: Product,
  })
    .then((order) => res.status(200).json(order))
    .catch((err) => res.status(400).json({ err, msg: "Something's wrong!" }));
};

const createOrder = (req, res) => {
  const { firstName, lastName, email, address, phoneNumber } = req.body;

  Order.create({ firstName, lastName, email, address, phoneNumber })
    .then((order) => res.status(200).json(order))
    .catch((err) => res.status(400).json({ err, msg: "Something's wrong!" }));
};

export { getOrders, getOrder, createOrder };
