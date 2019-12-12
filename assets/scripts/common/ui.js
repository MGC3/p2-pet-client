"use strict";
const userHome = require("../templates/UserHome.handlebars");
const landing = require("../templates/Landing.handlebars");
const toast = require("../templates/Toast.handlebars");

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
  $("#app").html(userHomeHtml);
};

const loadLanding = () => {
  $("#app").html(landing);
};

module.exports = {
  init,
  getUserHomeSuccess,
  notification
};
