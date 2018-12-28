function initForm() {
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

function buildRecipe() {
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let ingredientNodes = document.getElementsByName("ingredients");
  let ingredients = [];
 
  for (let i = 0; i < ingredientNodes.length; i++) {
    if (ingredNodes[i].value !== "") {
       ingredients.push(ingredientNodes[i].value);
    }
  }
  let recipe = { name, ingredients, description };
  return(recipe);
}
 
 
 
 