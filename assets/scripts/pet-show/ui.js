const commonEvents = require("../common/events");

const onDeletePetSuccess = () => {
  commonEvents.onGetUserHome();
};

const onUpdatePetNameSuccess = data => {
  console.warn(
    "Update name success! This is the ID I got back - if this is correct, send to refresh show pet: ",
    data.pet.id
  );
};

module.exports = {
  onDeletePetSuccess,
  onUpdatePetNameSuccess
};
