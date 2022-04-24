import cors from "cors";
import morgan from "morgan";
import express from "express";
import bodyParser from "body-parser";

import root from "./routes/root.js";
import product from "./routes/product.js";
import session from "./routes/session.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", root);
app.use("/api/session", session);
app.use("/api/products", product);

app.use("*/uploads", express.static("uploads"));

app.listen(PORT, () => {
  console.clear();
  console.log(`Server is running on port ${PORT}! 🚀🚀🚀`);
});
