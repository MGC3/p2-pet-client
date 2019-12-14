"use strict";
const userHome = require("../templates/UserHome.handlebars");
const landing = require("../templates/Landing.handlebars");
const toast = require("../templates/Toast.handlebars");
const navbar = require("../templates/Navbar.handlebars");
const navbarAuth = require("../templates/NavbarAuth.handlebars");

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
  $("#app").html(userHomeHtml);
};

const loadLanding = () => {
  $(".nav__container").remove();
  $("body").prepend(navbar);
  $("#app").html(landing);
};

module.exports = {
  init,
  getUserHomeSuccess,
  notification,
  loadLanding
};
