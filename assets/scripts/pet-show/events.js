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

  api
    .updatePetName(id, formData)
    .then(data => ui.onUpdatePetNameSuccess(data))
    .catch(commonUi.notification("Error updating pet", "failure"));
};

const addHandlers = () => {
  $("#app").on("click", ".pet-delete__btn", onDeletePet);
  $("#app").on("submit", "#update-pet-name", onUpdatePetName);
};

module.exports = {
  addHandlers
};
