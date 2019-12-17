const config = require("../config");
const store = require("../store");

const getUserHome = () => {
  return $.ajax({
    url: config.apiUrl + "/pets",
    method: "GET",
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  });
};

module.exports = {
  getUserHome
};
