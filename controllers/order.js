import models from "../models/index.js";

const Order = models.Order;
const OrderItem = models.OrderItem;

const getOrders = (req, res) => {
  Order.findAll({ include: OrderItem })
    .then((orders) => res.status(200).json(orders))
    .catch((err) => res.status(400).json({ err, msg: "Something's wrong!" }));
};

const getOrder = (req, res) => {
  const id = req.params.id;

  Order.findOne({ where: { id } })
    .then((order) => res.status(200).json(order))
    .catch((err) => res.status(400).json({ err, msg: "Something's wrong!" }));
};

const createOrder = (req, res) => {
  const {
    firstName,
    lastName,
    email,
    address,
    phoneNumber,
    totalToPay,
    OrderItems,
  } = req.body;

  Order.create(
    {
      firstName,
      lastName,
      email,
      address,
      phoneNumber,
      totalToPay,
      OrderItems,
    },
    { include: OrderItem }
  )
    .then((order) => res.status(200).json(order))
    .catch((err) => res.status(400).json({ err, msg: "Something's wrong!" }));
};

export { getOrders, getOrder, createOrder };
