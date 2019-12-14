const ui = require("./ui");
const commonUi = require("../common/ui");

const onSignUpLink = () => {
  ui.onSignUpLinkClick();
};

const onSignInLink = () => {
  ui.onSignInLinkClick();
};

const onLogoLanding = () => {
  commonUi.loadLanding();
};

const addHandlers = () => {
  $("body").on("click", "#sign-up-link", onSignUpLink);
  $("body").on("click", "#sign-in-link", onSignInLink);
  $("body").on("click", "#logo-landing", onLogoLanding);
};

module.exports = {
  addHandlers
};
