function init() {
  let formTemplate = document.getElementById("recipe-form-template").innerHTML;
  let template     = Handlebars.compile(formTemplate);
}
document.addEventListener("DOMContentLoaded", function(event) {
  init();
});

function handleSubmit() {
  let recipe = buildRecipe();
  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate);
 
  document.getElementById("main").innerHTML = template(recipe);
}

function displayEditForm() {
  let name = document.getElementById("name").innerHTML;
  let description = document.getElementById("description").innerHTML;
  let ingredNodes = document.getElementsByName("ingredients");
  let ingredients = [];
 
  for (let i = 0; i < ingredNodes.length; i++) {
     ingredients.push(ingredNodes[i].innerHTML);
  }
 
  let recipe = { name, ingredients, description, 'true': 'handleSubmit()'};
  let recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  let template = Handlebars.compile(recipeFormTemplate);
 
  document.getElementById("main").innerHTML = template(recipe);
}
 
 
 
 