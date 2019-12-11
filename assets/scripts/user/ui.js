const petForm = require("../templates/PetForm.handlebars");

const loadPetForm = () => {
  $("#app").html(petForm);
};

const loadPetShow = () => {
  console.warn("Pet show was clikced");
};
module.exports = {
  loadPetForm,
  loadPetShow
};
