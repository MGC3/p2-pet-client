"use strict";

const landing = require("../templates/Landing.handlebars");

const init = () => {
  loadLanding();
};

const loadLanding = () => {
  $("#app").html(landing);
};

module.exports = {
  init
};
