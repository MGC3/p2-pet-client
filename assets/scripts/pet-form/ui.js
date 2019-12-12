const commonEvents = require("../common/events");
const commonUi = require("../common/ui");

const addPetSuccess = () => {
  $("form").trigger("reset");
  commonEvents.onGetUserHome();
};

const addPetFailure = () => {
  $("form").trigger("reset");
  commonUi.notification("Error adding pet", "failure");
};

module.exports = {
  addPetSuccess,
  addPetFailure
};
