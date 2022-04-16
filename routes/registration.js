const express = require("express");
const router = express.Router();

const { register, logIn, logOut } = require("../controllers/registration");

router.post("/", register);
router.post("/login", logIn);
router.post("/logout", logOut);

module.exports = router;
