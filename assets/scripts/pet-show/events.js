const ui = require("./ui");
const api = require("./api");
const getFormFields = require("../../../lib/get-form-fields");

const onDeletePet = e => {
  const id = $(e.target).data("id");
  api
    .deletePet(id)
    .then(ui.onDeletePetSuccess)
    // FIXME: make sure catch works
    .catch(ui.failure);
};

const onUpdatePetName = e => {
  e.preventDefault();
  const id = $(e.target).data("id");
  const form = e.target;
  const formData = getFormFields(form);

  api
    .updatePetName(id, formData)
    .then(data => ui.onUpdatePetNameSuccess(data))
    // FIXME: make sure catch works
    .catch(ui.failure);
};

const addHandlers = () => {
  $("#app").on("click", ".pet-delete__btn", onDeletePet);
  $("#app").on("submit", "#update-pet-name", onUpdatePetName);
};

module.exports = {
  addHandlers
};
