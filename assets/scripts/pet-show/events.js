const ui = require("./ui");
const api = require("./api");
const commonUi = require("../common/ui");
const getFormFields = require("../../../lib/get-form-fields");

const onDeletePet = e => {
  const id = $(e.target).data("id");
  api
    .deletePet(id)
    .then(ui.onDeletePetSuccess)
    .catch(() => commonUi.notification("Error deleting pet", "failure"));
};

const onUpdatePetName = e => {
  e.preventDefault();
  const id = $(e.target).data("id");
  const form = e.target;
  const formData = getFormFields(form);
  api
    .updatePetName(id, formData)
    .then(data => ui.onUpdatePetNameSuccess(data))
    .catch(() => commonUi.notification("Error updating pet", "failure"));
};

const onCreateWeight = e => {
  e.preventDefault();
  const id = $(e.target).data("id");
  const form = e.target;
  const formData = getFormFields(form);
  const formDataId = {
    weightlog: {
      weight: formData.weightlog.amount,
      date: formData.weightlog.date,
      pet_id: id
    }
  };
  api
    .addWeightLog(formDataId)
    .then(() => ui.onCreateWeightSuccess(id))
    .catch(() => commonUi.notification("Error creating weight", "failure"));
};

const onDeleteWeight = e => {
  e.preventDefault();
  const weightlogId = $(e.target)
    .closest(".weight-row")
    .data("id");
  const petId = $(e.target)
    .closest(".weight__list")
    .data("pet");
  const queryString = `${weightlogId}?pet_id=${petId}`;

  api
    .deleteWeight(queryString)
    .then(() => ui.onDeleteWeightSuccess(petId))
    .catch(() => commonUi.notification("Error deleting weight", "failure"));
};

const onUpdatePetWeight = e => {
  e.preventDefault();
  const weightlogId = $(e.target).data("id");
  const petId = $(e.target)
    .parent()
    .data("pet");
  const form = e.target;
  const formData = getFormFields(form);
  const formDataId = {
    weightlog: {
      weight: formData.weightlog.amount,
      date: formData.weightlog.date,
      pet_id: petId
    }
  };

  api
    .updateWeight(weightlogId, formDataId)
    .then(() => ui.onUpdateWeightSuccess(petId))
    .catch(() => commonUi.notification("Error updating weight", "failure"));
};

const onShowUpdate = () => {
  ui.onClickShowUpdate();
};

const onHideUpdate = e => {
  e.preventDefault();
  ui.onClickHideUpdate();
};

const onShowEdit = e => {
  const id = $(e.target)
    .closest(".weight-row")
    .data("id");
  ui.onClickShowEdit(id);
};

const onHideEdit = e => {
  e.preventDefault();
  const id = $(e.target)
    .parent()
    .data("id");
  ui.onClickHideEdit(id);
};

const addHandlers = () => {
  $("#app").on("click", ".pet-delete__btn", onDeletePet);
  $("#app").on("submit", "#update-pet-name", onUpdatePetName);
  $("#app").on("submit", "#weight-create", onCreateWeight);
  $("#app").on("click", ".weight-delete__btn", onDeleteWeight);
  $("#app").on("submit", "#update-pet-weight", onUpdatePetWeight);
  $("#app").on("click", ".show-update__btn", onShowUpdate);
  $("#app").on("click", ".hide-update__btn", onHideUpdate);
  $("#app").on("click", ".show-edit__btn", onShowEdit);
  $("#app").on("click", ".hide-edit__btn", onHideEdit);
};

module.exports = {
  addHandlers
};
