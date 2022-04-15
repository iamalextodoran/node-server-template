const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
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
