const signUp = require("../templates/SignUp.handlebars");
const signIn = require("../templates/SignIn.handlebars");
import { MDCTextField } from "@material/textfield";
import { MDCNotchedOutline } from "@material/notched-outline";

const onSignUpLinkClick = () => {
  $("#app").html(signUp);
  loadSignUpMD();
};

const onSignInLinkClick = () => {
  $("#app").html(signIn);
  loadSignUpMD();
};

// instantiate the MD components
// from https://material.io/develop/web/docs/importing-js/
const loadSignUpMD = () => {
  const usernames = [].map.call(
    document.querySelectorAll(".mdc-text-field"),
    function(el) {
      return new MDCTextField(el);
    }
  );

  const notches = [].map.call(
    document.querySelectorAll(".mdc-notched-outline"),
    function(el) {
      return new MDCNotchedOutline(el);
    }
  );
};

module.exports = {
  onSignUpLinkClick,
  onSignInLinkClick
};
