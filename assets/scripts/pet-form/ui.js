const commonEvents = require("../common/events");
const commonUi = require("../common/ui");

const addPetSuccess = () => {
  commonEvents.onGetUserHome();
};

const addPetFailure = () => {
  commonUi.notification("Error adding pet", "failure");
};

module.exports = {
  addPetSuccess,
  addPetFailure
};
