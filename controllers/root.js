const getRoot = (_req, res) => {
  res
    .status(200)
    .json({ msg: "Welcome to my API! 🚀" })
    .catch((err) => res.status(400).json({ err, msg: "Something's wrong!" }));
};

export { getRoot };
