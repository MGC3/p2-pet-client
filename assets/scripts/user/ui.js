const petForm = require("../templates/PetForm.handlebars");
const petShow = require("../templates/PetShow.handlebars");
const commonUi = require("../common/ui");
const petChart = require("../chart/petWeightChart");
const eva = require("eva-icons");

const loadPetForm = () => {
  $("#app")
    .hide()
    .html(petForm)
    .fadeIn(250);
  commonUi.loadMDForms();
};

const getPetSuccess = data => {
  // attrib sort code from: https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
  // sort by newest date at top
  data.pet.weightlogs.sort((a, b) => (a.date < b.date ? 1 : -1));
  const petShowHtml = petShow({ pet: data.pet });
  $("#app").html(petShowHtml);
  const weights = data.pet.weightlogs.map(i => i.weight).reverse();
  const dates = data.pet.weightlogs.map(i => i.date).reverse();
  eva.replace();
  petChart.drawChart(weights, dates);
};

const getPetFailure = () => {
  commonUi.notification("Error getting pets", "failure");
};

module.exports = {
  loadPetForm,
  getPetSuccess,
  getPetFailure
};
