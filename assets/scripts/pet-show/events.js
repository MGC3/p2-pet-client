const ui = require("./ui");
const api = require("./api");
const getFormFields = require("../../../lib/get-form-fields");

const onDeletePet = e => {
  const id = $(e.target).data("id");
  console.warn("You are deleting pet with id: ", id);
};

const onUpdatePetName = e => {
  e.preventDefault();
  const id = $(e.target).data("id");
  console.warn("You are updating pet with id: ", id);
};

const addHandlers = () => {
  $("#app").on("click", ".pet-delete__btn", onDeletePet);
  $("#app").on("submit", "#update-pet-name", onUpdatePetName);
};

module.exports = {
  addHandlers
};
