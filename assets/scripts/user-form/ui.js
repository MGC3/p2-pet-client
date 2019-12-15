const signUp = require("../templates/SignUp.handlebars");
const signIn = require("../templates/SignIn.handlebars");
const settings = require("../templates/Settings.handlebars");
const commonUi = require("../common/ui");

const onSignUpLinkClick = () => {
  $("#app")
    .hide()
    .html(signUp)
    .fadeIn(250);
  commonUi.loadMDForms();
};

const onSignInLinkClick = () => {
  $("#app")
    .hide()
    .html(signIn)
    .fadeIn(250);
  commonUi.loadMDForms();
};

const onShowSettingsClick = () => {
  $("#app")
    .hide()
    .html(settings)
    .fadeIn(250);
  commonUi.loadMDForms();
};

module.exports = {
  onSignUpLinkClick,
  onSignInLinkClick,
  onShowSettingsClick
};
