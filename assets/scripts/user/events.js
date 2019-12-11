const ui = require("./ui");

const onClickPetFormButton = () => {
  ui.loadPetForm();
};
const addHandlers = e => {
  $("#app").on("click", ".pet-form__btn", onClickPetFormButton);
};

module.exports = {
  addHandlers
};
