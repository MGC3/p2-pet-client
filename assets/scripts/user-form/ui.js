const signUp = require("../templates/SignUp.handlebars");
const signIn = require("../templates/SignIn.handlebars");
import { MDCTextField } from "@material/textfield";
import { MDCNotchedOutline } from "@material/notched-outline";

const onSignUpLinkClick = () => {
  $("#app").html(signUp);
  loadSignUpMD();
};

const loadSignUpMD = () => {
  const notch = new MDCNotchedOutline(
    document.querySelector(".mdc-notched-outline")
  );
  const username = new MDCTextField(document.querySelector(".mdc-text-field"));
};

const onSignInLinkClick = () => {
  $("#app").html(signIn);
};

module.exports = {
  onSignUpLinkClick,
  onSignInLinkClick
};
