const userHome = require("../templates/UserHome.handlebars");

// TODO: Refactor later - loadUserHome duplicated in auth stuff
const loadUserHome = () => {
  $("#app").html(userHome);
};

const addPetSuccess = () => {
  // send send user back to user home page TODO: and pass in api data
  loadUserHome();
};

const addPetFailure = () => {
  // FIXME: better messaging
  console.warn("Failed to add pet");
};

module.exports = {
  addPetSuccess,
  addPetFailure
};
