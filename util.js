import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET;
const EXPIRATION = 1000 * 60 * 2; // 2 minutes

const getToken = (user) =>
  jwt.sign({ ...user }, SECRET, { expiresIn: EXPIRATION.toString() });

const isAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const onlyToken = token.slice(7, token.length);

    jwt.verify(onlyToken, SECRET, (err, decode) => {
      const msg =
        err?.name === "TokenExpiredError" ? "Token expired" : "Invalid Token";
      if (err) return res.status(401).send({ msg });

      req.user = decode;

      return next();
    });
  } else {
    return res.status(401).send({ msg: "Token is not supplied." });
  }
};

export { getToken, isAuth };
