const config = require("../config");
const store = require("../store");

const getUserHome = () => {
  return $.ajax({
    // TODO: check to make sure this doesn't return all pets...just users
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
