"use strict";

const store = require("../store");
const commonEvents = require("../common/events");
const commonUi = require("../common/ui");

const onSignupFailure = () => {
  $("form").trigger("reset");
  commonUi.notification("Error creating account", "failure");
};

const onSigninSuccess = responseData => {
  store.user = responseData.user;
  commonEvents.onGetUserHome();
};

const onSigninFailure = () => {
  $("form").trigger("reset");
  commonUi.notification("Error signing in", "failure");
};

const onChangePasswordSuccess = responseData => {
  $("form").trigger("reset");
  commonUi.notification("Successfully changed password", "success");
};

const onChangePasswordFailure = () => {
  $("form").trigger("reset");
  commonUi.notification("Error changing password", "failure");
};

const onSignOutSuccess = () => {
  store.user = {}; // the store no longer knows who we are
  // TODO: check if need to clear anything else
  // $("#app").html(landing);
  commonUi.loadLanding();
};

const onSignOutFailure = () => {
  commonUi.notification("Error signing out", "failure");
};

module.exports = {
  onSignupFailure,
  onSigninSuccess,
  onSigninFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
};
