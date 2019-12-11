"use strict";
const userHome = require("../templates/UserHome.handlebars");
const landing = require("../templates/Landing.handlebars");

const init = () => {
  loadLanding();
};

const getUserHomeSuccess = data => {
  console.warn(data);
  const userHomeHtml = userHome({ pets: data.pets });
  $("#app").html(userHomeHtml);
};

const loadLanding = () => {
  $("#app").html(landing);
};

module.exports = {
  init,
  getUserHomeSuccess
};
