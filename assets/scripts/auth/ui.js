"use strict";

const store = require("../store");
// const userHome = require("../templates/UserHome.handlebars");
const landing = require("../templates/Landing.handlebars");
const commonEvents = require("../common/events");

const onSuccess = message => {
  $("#message")
    .removeClass("failure")
    .addClass("success")
    .text(message);
  // reset form back to default if any
  $("form").trigger("reset");
};

const onFailure = message => {
  $("#message")
    .removeClass("success")
    .addClass("failure)")
    .text(message);
  $("form").trigger("reset");
};

const onSignupSuccess = () => {
  // FIXME: better messaging
  console.warn("Sucessfully signed up");
  // onSuccess("Sucessfully signed up");
};

const onSignupFailure = () => {
  // FIXME: better messaging
  console.warn("ERROR ERROR - sign up");
  // onFailure("ERROR ERROR - sign up");
};

const onSigninSuccess = responseData => {
  store.user = responseData.user;
  console.log(store);
  // FIXME: better messaging
  // onSuccess("Sucessfully signed in");
  commonEvents.onGetUserHome();
};

const loadUserHome = () => {
  $("#app").html(userHome);
};

const onSigninFailure = () => {
  // FIXME: better messaging
  console.warn("ERROR ERROR - sign in");
  // onFailure("ERROR ERROR - sign in");
};

const onChangePasswordSuccess = responseData => {
  // FIXME: better messaging
  console.warn("Sucessfully changed password");
  // onSuccess("Sucessfully changed password");
};

const onChangePasswordFailure = () => {
  // FIXME: better messaging
  console.warn("ERROR ERROR - change password");
  // onFailure("ERROR ERROR - change password");
};

const onSignOutSuccess = () => {
  onSuccess("Sucessfully Signed Out");
  store.user = {}; // the store no longer knows who we are
  // FIXME: clear stuff, load landing page again
  console.warn("Signed out");
  $("#app").html(landing);
};

const onSignOutFailure = () => {
  onFailure("ERROR ERROR - sign out");
};

module.exports = {
  onSignupSuccess,
  onSignupFailure,
  onSigninSuccess,
  onSigninFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
};
