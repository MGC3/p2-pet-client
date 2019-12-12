const ui = require("./ui");
const api = require("./api");
const commonUi = require("../common/ui");
const getFormFields = require("../../../lib/get-form-fields");

const onDeletePet = e => {
  const id = $(e.target).data("id");
  api
    .deletePet(id)
    .then(ui.onDeletePetSuccess)
    .catch(commonUi.notification("Error deleting pet", "failure"));
};

const onUpdatePetName = e => {
  e.preventDefault();
  const id = $(e.target).data("id");
  const form = e.target;
  const formData = getFormFields(form);
  console.count();
  api
    .updatePetName(id, formData)
    .then(data => ui.onUpdatePetNameSuccess(data))
    .catch(commonUi.notification("Error updating pet", "failure"));
};

const onCreateWeight = e => {
  e.preventDefault();
  const id = $(e.target).data("id");
  const form = e.target;
  const formData = getFormFields(form);
  const formDataId = {
    weightlog: {
      weight: formData.weightlog.amount,
      date: formData.weightlog.date,
      pet_id: id
    }
  };
  api
    .addWeightLog(formDataId)
    .then(() => ui.onCreateWeightSuccess(id))
    .catch(commonUi.notification("Error creating weight", "failure"));
};

const addHandlers = () => {
  $("#app").on("click", ".pet-delete__btn", onDeletePet);
  $("#app").on("submit", "#update-pet-name", onUpdatePetName);
  $("#app").on("submit", "#weight-create", onCreateWeight);
};

module.exports = {
  addHandlers
};
