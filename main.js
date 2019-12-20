
$(document).ready( initializeApp );

var list;

function initializeApp(){

  list = new Barlist({
    characterListArea: '.characterList',
    characterDetailsArea: '.characterImage',
    recipeDetails: '.recipeDetails',
    drinksRecipe: '.drinkImage'
  })

  list.getCharactersfromServer();
  //addEventListeners();
}
