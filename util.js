import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET || "secret";

const getToken = (user) => jwt.sign({ ...user }, SECRET, { expiresIn: "24h" });

const isAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const onlyToken = token.slice(7, token.length);

    jwt.verify(onlyToken, SECRET, (err, decode) => {
      if (err) return res.status(401).send({ msg: "Invalid Token" });

      req.user = decode;
      next();
      return;
    });
  } else {
    return res.status(401).send({ msg: "Token is not supplied." });
  }
};

export { getToken, isAuth };
