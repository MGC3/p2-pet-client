const commonEvents = require("../common/events");

const onDeletePetSuccess = () => {
  commonEvents.onGetUserHome();
};

const onUpdatePetNameSuccess = data => {
  const id = data.pet.id;
  commonEvents.onGetPetShow(id);
};

module.exports = {
  onDeletePetSuccess,
  onUpdatePetNameSuccess
};
