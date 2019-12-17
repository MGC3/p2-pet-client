const config = require("../config");
const store = require("../store");

const getPet = id => {
  return $.ajax({
    url: config.apiUrl + "/pets/" + id,
    method: "GET",
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  });
};

module.exports = {
  getPet
};
