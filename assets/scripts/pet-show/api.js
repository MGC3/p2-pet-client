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

const updatePetName = (id, formData) => {
  return $.ajax({
    url: config.apiUrl + "/pets/" + id,
    method: "PATCH",
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  });
};

module.exports = {
  deletePet,
  updatePetName
};
