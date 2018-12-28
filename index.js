function init() {
   let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
   document.getElementsByTagName("main")[0].innerHTML = template({"submitAction": "handleSubmit()"});
   Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML);
   Handlebars.registerHelper("displayIngredient", function(ingredient) {
     return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>');
   });
 }	 

 document.addEventListener("DOMContentLoaded", function(event) {
   init()	   init()
 })	 })

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
  let ingredNodes = document.getElementsByName("ingredients");
  let ingredients = [];
 
  for (let i = 0; i < ingredNodes.length; i++) {
    if (ingredNodes[i].value !== "") {
      ingredients.push(ingredNodes[i].value);
    }
  }
  let recipe = { name, ingredients, description };
  return(recipe);
}

function setupHelpersPartials() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
     return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>');
   });
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
}

 
 