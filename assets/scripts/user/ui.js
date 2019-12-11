const petForm = require("../templates/PetForm.handlebars");
const petShow = require("../templates/PetShow.handlebars");

const loadPetForm = () => {
  $("#app").html(petForm);
};

const getPetSuccess = data => {
  console.warn(data);
  const petShowHtml = petShow({ pet: data.pet });
  $("#app").html(petShowHtml);
};
module.exports = {
  loadPetForm,
  getPetSuccess
};
