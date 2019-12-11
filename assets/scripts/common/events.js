const api = require("./api");
const ui = require("./ui");
const userApi = require("../user/api");
const userUi = require("../user/ui");

const onGetUserHome = () => {
  api
    .getUserHome()
    .then(ui.getUserHomeSuccess)
    // FIXME: make sure catch works
    .catch(ui.failure);
};

const onGetPetShow = id => {
  // TODO: this is a workaround, make own method in the future if we want a custom error
  userApi
    .getPet(id)
    .then(data => userUi.getPetSuccess(data))
    // FIXME: make sure catch works
    .catch(ui.failure);
};

module.exports = {
  onGetUserHome,
  onGetPetShow
};
