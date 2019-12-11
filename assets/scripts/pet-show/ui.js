const commonEvents = require("../common/events");

const onDeletePetSuccess = () => {
  commonEvents.onGetUserHome();
};

module.exports = {
  onDeletePetSuccess
};
