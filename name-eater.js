const browserApi = (chrome) ? chrome : browser;
const meMessage = browserApi.i18n.getMessage("me_name");
const exampleName = browserApi.i18n.getMessage("ex_name");

browserApi.storage.local.get({
	name: exampleName
}, function (items) {
	const name = items.name;
	document.body.innerHTML = document.body.innerHTML.replaceAll(name, meMessage + " " + name);
});