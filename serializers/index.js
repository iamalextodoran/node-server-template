const { getToken } = require("../util");

const userSerializer = (data) => {
  const destructured = (object) => {
    const { id, firstName, lastName, email } = object;
    return { id, firstName, lastName, email, token: getToken(object) };
  };

  if (Array.isArray(data)) {
    return data.map((record) => destructured(record));
  } else {
    return destructured(data);
  }
};

module.exports = { userSerializer };
