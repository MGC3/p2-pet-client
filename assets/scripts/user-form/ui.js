const signUp = require("../templates/SignUp.handlebars");
const signIn = require("../templates/SignIn.handlebars");
const settings = require("../templates/Settings.handlebars");
const commonUi = require("../common/ui");

const onSignUpLinkClick = () => {
  $("#app").html(signUp);
  commonUi.loadMDForms();
};

const onSignInLinkClick = () => {
  $("#app").html(signIn);
  commonUi.loadMDForms();
};

const onShowSettingsClick = () => {
  $("#app").html(settings);
  commonUi.loadMDForms();
};

module.exports = {
  onSignUpLinkClick,
  onSignInLinkClick,
  onShowSettingsClick
};
