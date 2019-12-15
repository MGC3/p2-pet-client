const signUp = require("../templates/SignUp.handlebars");
const signIn = require("../templates/SignIn.handlebars");
const commonUi = require("../common/ui");

const onSignUpLinkClick = () => {
  $("#app").html(signUp);
  commonUi.loadMDForms();
};

const onSignInLinkClick = () => {
  $("#app").html(signIn);
  commonUi.loadMDForms();
};

module.exports = {
  onSignUpLinkClick,
  onSignInLinkClick
};
