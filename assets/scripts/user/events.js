const ui = require("./ui");
const api = require("./api");

const onClickPetFormButton = () => {
  ui.loadPetForm();
};

const onClickPetShowButton = e => {
  // TODO: probably a better way to do this
  const id = $(e.target)
    .closest(".pet-show__btn")
    .data("id");

  api
    .getPet(id)
    .then(data => ui.getPetSuccess(data))
    .catch(() => ui.getPetFailure());
};

const addHandlers = () => {
  $("#app").on("click", ".pet-form__btn", onClickPetFormButton);
  $("#app").on("click", ".pet-show__btn", onClickPetShowButton);
};

module.exports = {
  addHandlers
};
