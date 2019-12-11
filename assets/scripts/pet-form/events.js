const ui = require("./ui");
const api = require("./api");
const getFormFields = require("../../../lib/get-form-fields");

const onCreatePet = e => {
  e.preventDefault();
  // send api request to add pet
  const form = e.target;
  const addNewPetData = getFormFields(form);
  api
    .add(addNewPetData)
    .then(ui.addPetSuccess)
    .catch(ui.addPetFailure);

  // send send user back to user home page
};

const addHandlers = e => {
  $("#app").on("submit", "#pet-create", onCreatePet);
};

module.exports = {
  addHandlers
};
