const ui = require("./ui");
const api = require("./api");

const onClickPetFormButton = () => {
  ui.loadPetForm();
};

const onClickPetShowButton = e => {
  const id = $(e.target).data("id");
  api
    .getPet(id)
    .then(data => ui.getPetSuccess(data))
    // FIXME: make sure catch works
    .catch(ui.failure);
};

const onClickTestGet = () => {
  api.testGet().then(data => console.log(data));
};

const addHandlers = () => {
  $("#app").on("click", ".pet-form__btn", onClickPetFormButton);
  $("#app").on("click", ".pet-show__btn", onClickPetShowButton);
  $("#app").on("click", ".test-get-one", onClickTestGet);
};

module.exports = {
  addHandlers
};
