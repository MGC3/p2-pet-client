const petForm = require("../templates/PetForm.handlebars");

const loadPetForm = () => {
  $("#app").html(petForm);
};
module.exports = {
  loadPetForm
};
