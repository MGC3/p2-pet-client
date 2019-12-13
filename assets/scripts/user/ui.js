const petForm = require("../templates/PetForm.handlebars");
const petShow = require("../templates/PetShow.handlebars");
const commonUi = require("../common/ui");
const petChart = require("../chart/petWeightChart");

const loadPetForm = () => {
  $("#app").html(petForm);
};

const getPetSuccess = data => {
  // attrib sort code from: https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
  // sort by newest date at top
  data.pet.weightlogs.sort((a, b) => (a.date < b.date ? 1 : -1));
  const petShowHtml = petShow({ pet: data.pet });
  $("#app").html(petShowHtml);
  petChart.drawChart();
};

const getPetFailure = () => {
  commonUi.notification("Error getting pets", "failure");
};

module.exports = {
  loadPetForm,
  getPetSuccess,
  getPetFailure
};
