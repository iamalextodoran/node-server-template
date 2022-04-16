const jwt = require("jsonwebtoken");

module.exports = {
  getToken: (user) => jwt.sign({ ...user }, "secret", { expiresIn: "24h" }),

  isAuth: (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
      const onlyToken = token.slice(7, token.length);

      jwt.verify(onlyToken, "secret", (err, decode) => {
        if (err) return res.status(401).send({ msg: "Invalid Token" });

        req.user = decode;
        next();
        return;
      });
    } else {
      return res.status(401).send({ msg: "Token is not supplied." });
    }
  },
};
