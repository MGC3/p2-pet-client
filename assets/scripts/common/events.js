const api = require("./api");
const ui = require("./ui");
const userApi = require("../user/api");
const userUi = require("../user/ui");
const commonUi = require("../common/ui");

const onGetUserHome = () => {
  api
    .getUserHome()
    .then(ui.getUserHomeSuccess)
    .catch(() =>
      commonUi.notification("Error refreshing user home page", "failure")
    );
};

const onGetPetShow = id => {
  userApi
    .getPet(id)
    .then(data => userUi.getPetSuccess(data))
    .catch(() => commonUi.notification("Error showing pet page", "failure"));
};

module.exports = {
  onGetUserHome,
  onGetPetShow
};
