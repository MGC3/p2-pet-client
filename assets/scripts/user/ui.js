const petForm = require("../templates/PetForm.handlebars");
const petShow = require("../templates/PetShow.handlebars");
const commonUi = require("../common/ui");

const loadPetForm = () => {
  $("#app").html(petForm);
};

const getPetSuccess = data => {
  console.warn("Data from getPetSuccess", data);
  const petShowHtml = petShow({ pet: data.pet });
  $("#app").html(petShowHtml);
};

const getPetFailure = () => {
  commonUi.notification("Error getting pets", "failure");
};

module.exports = {
  loadPetForm,
  getPetSuccess,
  getPetFailure
};
