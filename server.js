import cors from "cors";
import morgan from "morgan";
import express from "express";
import bodyParser from "body-parser";

import root from "./routes/root.js";
import user from "./routes/user.js";
import product from "./routes/product.js";
import registration from "./routes/registration.js";

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
