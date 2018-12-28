function init() {
  let formTemplate = document.getElementById("recipe-form-template").innerHTML;
  let template     = Handlebars.compile(formTemplate);
}
document.addEventListener("DOMContentLoaded", function(event) {
  init();
});

function handleSubmit() {
  let recipe         = buildRecipe();
  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template       = Handlebars.compile(recipeTemplate);
 
  document.getElementById("main").innerHTML = template(recipe);
}