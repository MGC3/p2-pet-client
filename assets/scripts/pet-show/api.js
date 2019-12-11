const config = require("../config");
const store = require("../store");

const deletePet = id => {
  return $.ajax({
    url: config.apiUrl + "/pets/" + id,
    method: "DELETE",
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  });
};

module.exports = {
  deletePet
};
