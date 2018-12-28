function init() {
  let formTemplate = document.getElementById("recipe-form-template").innerHTML;
  let template     = Handlebars.compile(formTemplate);
}
document.addEventListener("DOMContentLoaded", function(event) {
  init();
});
