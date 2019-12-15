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

const onShowSettings = () => {
  ui.onShowSettingsClick();
};

const addHandlers = () => {
  $("body").on("click", "#sign-up-link", onSignUpLink);
  $("body").on("click", "#sign-in-link", onSignInLink);
  $("body").on("click", "#logo-landing", onLogoLanding);
  $("body").on("click", "#logo-auth", onLogoAuth);
  $("body").on("click", ".show-settings__btn", onShowSettings);
};

module.exports = {
  addHandlers
};
