import jwt from "jsonwebtoken";

const ONE_MINUTE = 1000 * 60;
const EXPIRATION = ONE_MINUTE * 10;
const SECRET = process.env.SECRET;

const createToken = (user) =>
  jwt.sign({ ...user }, SECRET, { expiresIn: EXPIRATION.toString() });

const authorizeUser = (req, res, next) => {
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

export { createToken, authorizeUser, EXPIRATION };
