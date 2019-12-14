"use strict";

const api = require("./api");
const getFormFields = require("../../../lib/get-form-fields");
const ui = require("./ui");

const onSignUp = e => {
  e.preventDefault();

  const form = e.target;
  const formData = getFormFields(form);

  api
    .signUp(formData)
    .then(() => api.signIn(formData))
    .then(ui.onSigninSuccess)
    .catch(() => ui.onSignupFailure());
};

const onSignIn = e => {
  e.preventDefault();

  const form = e.target;
  const formData = getFormFields(form);

  api
    .signIn(formData)
    .then(ui.onSigninSuccess)
    .catch(() => ui.onSigninFailure());
};

const onChangePassword = e => {
  e.preventDefault();

  const form = e.target;
  const formData = getFormFields(form);

  api
    .changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(() => ui.onChangePasswordFailure());
};

const onSignOut = e => {
  e.preventDefault();
  api
    .signOut()
    .then(ui.onSignOutSuccess)
    .catch(() => ui.onSignOutFailure());
};

const addHandlers = e => {
  $("body").on("submit", "#sign-up", onSignUp);
  $("body").on("submit", "#sign-in", onSignIn);
  $("body").on("submit", "#change-password", onChangePassword);
  $("body").on("submit", "#sign-out", onSignOut);
};

module.exports = {
  addHandlers
};
