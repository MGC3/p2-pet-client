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

const addWeightLog = formDataId => {
  return $.ajax({
    url: config.apiUrl + "/weightlogs/",
    method: "POST",
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formDataId
  });
};

const deleteWeight = queryString => {
  return $.ajax({
    url: config.apiUrl + "/weightlogs/" + queryString,
    method: "DELETE",
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  });
};

module.exports = {
  deletePet,
  updatePetName,
  addWeightLog,
  deleteWeight
};
