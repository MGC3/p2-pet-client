const ui = require("./ui");
const commonUi = require("../common/ui");
const commonEvents = require("../common/events");

const onSignUpLink = () => {
  ui.onSignUpLinkClick();
};

const onSignInLink = () => {
  ui.onSignInLinkClick();
};

const onLogoLanding = () => {
  commonUi.loadLanding();
};

const onLogoAuth = () => {
  commonEvents.onGetUserHome();
};

const addHandlers = () => {
  $("body").on("click", "#sign-up-link", onSignUpLink);
  $("body").on("click", "#sign-in-link", onSignInLink);
  $("body").on("click", "#logo-landing", onLogoLanding);
  $("body").on("click", "#logo-auth", onLogoAuth);
};

module.exports = {
  addHandlers
};
