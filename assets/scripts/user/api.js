const config = require("../config");
const store = require("../store");

const getPet = id => {
  return $.ajax({
    // TODO: check to make sure this doesn't return all pets...just users
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
