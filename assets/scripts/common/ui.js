"use strict";
const userHome = require("../templates/UserHome.handlebars");
const landing = require("../templates/Landing.handlebars");
const toast = require("../templates/Toast.handlebars");
const navbar = require("../templates/Navbar.handlebars");
const navbarAuth = require("../templates/NavbarAuth.handlebars");
const eva = require("eva-icons");
import { MDCTextField } from "@material/textfield";
import { MDCNotchedOutline } from "@material/notched-outline";

const init = () => {
  loadLanding();
};

const notification = (text, type = null) => {
  // TODO: refactor opportunity, figure out the correct pattern for this
  const opts = {
    text: text,
    type: type == "success" ? "🙂" : "😢"
  };
  const toastHtml = toast({ opts });
  $("#app").append(toastHtml);
  $("#toast").toast("show");
  window.setTimeout(() => {
    $("#toast").remove();
  }, 3000);
};

const getUserHomeSuccess = data => {
  const userHomeHtml = userHome({ pets: data.pets });
  $(".nav__container").remove();
  $("body").prepend(navbarAuth);
  $("#app")
    .hide()
    .html(userHomeHtml)
    .fadeIn(300);
  eva.replace();
};

const loadLanding = () => {
  $(".nav__container").remove();
  $("body").prepend(navbar);
  $("#app")
    .hide()
    .html(landing)
    .fadeIn(250);
};

// instantiate the MD components
// from https://material.io/develop/web/docs/importing-js/
const loadMDForms = () => {
  const textFields = [].map.call(
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
  init,
  getUserHomeSuccess,
  notification,
  loadLanding,
  loadMDForms
};
