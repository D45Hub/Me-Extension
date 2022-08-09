const nameInputId = "nameInput";

const browserApi = (chrome) ? chrome : browser;

const exampleName = browserApi.i18n.getMessage("ex_name");
const saveBtnText = browserApi.i18n.getMessage("save_btn");
const enterNameText = browserApi.i18n.getMessage("name_enter");
const optionTitleText = browserApi.i18n.getMessage("extension_options");

function save_options() {
  const nameInput = document.getElementById(nameInputId).value;

  browserApi.storage.local.set({
    name: nameInput
  }, function () {
    const savedMsg = browserApi.i18n.getMessage("options_saved_msg");
    var status = document.getElementById('status');
    status.textContent = savedMsg;
    setTimeout(function () {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  browserApi.storage.local.get({
    name: exampleName
  }, function (items) {
    document.getElementById(nameInputId).value = items.name;
  });
}

document.getElementById("save").innerHTML = saveBtnText;
document.getElementById("nameEnterLabel").innerHTML = enterNameText;
document.getElementById("optionTitle").innerHTML = optionTitleText;

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);