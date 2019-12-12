"use strict";

const store = require("../store");
const landing = require("../templates/Landing.handlebars");
const commonEvents = require("../common/events");
const commonUi = require("../common/ui");

const onSignupSuccess = () => {
  commonUi.notification("Successfully created account", "success");
};

const onSignupFailure = () => {
  commonUi.notification("Error creating account", "failure");
};

const onSigninSuccess = responseData => {
  store.user = responseData.user;
  console.log(store);
  commonEvents.onGetUserHome();
};

const onSigninFailure = () => {
  commonUi.notification("Error signing in", "failure");
};

const onChangePasswordSuccess = responseData => {
  commonUi.notification("Successfully changed password", "success");
};

const onChangePasswordFailure = () => {
  commonUi.notification("Error changing password", "failure");
};

const onSignOutSuccess = () => {
  store.user = {}; // the store no longer knows who we are
  // FIXME: clear stuff, load landing page again
  $("#app").html(landing);
};

const onSignOutFailure = () => {
  commonUi.notification("Error signing out", "failure");
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
