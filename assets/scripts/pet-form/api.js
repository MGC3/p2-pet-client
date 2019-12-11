const config = require("../config");

const add = formData => {
  return $.ajax({
    url: config.apiUrl + "/pets/",
    method: "POST",
    data: formData
  });
};

module.exports = {
  add
};
