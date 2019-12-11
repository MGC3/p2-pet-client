const api = require("./api");
const ui = require("./ui");

const onGetUserHome = () => {
  api
    .getUserHome()
    .then(ui.getUserHomeSuccess)
    // FIXME: make sure catch works
    .catch(ui.failure);
};

module.exports = {
  onGetUserHome
};
