const express = require("express");
const router = express.Router();
const {
  createUser,
  updateUser,
  getUsers,
  getUser,
  deleteUser,
  deleteUsers,
} = require("../controllers/user");

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/", deleteUsers);
router.delete("/:id", deleteUser);

module.exports = router;
