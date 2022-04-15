const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const user = require("./routes/user");
const product = require("./routes/product");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.json({ message: "Welcome to  application." }));

app.use("/api/users", user);
app.use("/api/products", product);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}! 🚀🚀🚀`);
});
