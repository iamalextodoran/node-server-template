const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");

const root = require("./routes/root");
const user = require("./routes/user");
const product = require("./routes/product");
const registration = require("./routes/registration");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", root);
app.use("/api/users", user);
app.use("/api/products", product);
app.use("/api/registration", registration);

app.listen(PORT, () => {
  console.clear();
  console.log(`Server is running on port ${PORT}! 🚀🚀🚀`);
});
