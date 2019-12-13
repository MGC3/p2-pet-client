const commonEvents = require("../common/events");

const onDeletePetSuccess = () => {
  $("form").trigger("reset");
  commonEvents.onGetUserHome();
};

const onUpdatePetNameSuccess = data => {
  $("form").trigger("reset");
  const id = data.pet.id;
  commonEvents.onGetPetShow(id);
};

const onCreateWeightSuccess = id => {
  $("form").trigger("reset");
  commonEvents.onGetPetShow(id);
};

const onDeleteWeightSuccess = id => {
  $("form").trigger("reset");
  commonEvents.onGetPetShow(id);
};

const onUpdateWeightSuccess = id => {
  $("form").trigger("reset");
  commonEvents.onGetPetShow(id);
};

module.exports = {
  onDeletePetSuccess,
  onUpdatePetNameSuccess,
  onCreateWeightSuccess,
  onDeleteWeightSuccess,
  onUpdateWeightSuccess
};
