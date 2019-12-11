const commonEvents = require("../common/events");

const addPetSuccess = () => {
  commonEvents.onGetUserHome();
};

const addPetFailure = () => {
  // FIXME: better messaging
  console.warn("Failed to add pet");
};

module.exports = {
  addPetSuccess,
  addPetFailure
};
