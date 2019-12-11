const ui = require("./ui");

const onClickPetFormButton = () => {
  ui.loadPetForm();
};

const onClickPetShowButton = () => {
  ui.loadPetShow();
};

const addHandlers = e => {
  $("#app").on("click", ".pet-form__btn", onClickPetFormButton);
  $("#app").on("click", ".pet-show__btn", onClickPetShowButton);
};

module.exports = {
  addHandlers
};
