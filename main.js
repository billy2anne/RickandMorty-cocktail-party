
$(document).ready( initializeApp );

var list;

function initializeApp(){
  list = new BarList({
    characterListArea: '.characterList',
    characterDetailsArea: '.characterImage',
    recipeDetails: '.recipeDetails',
    drinksRecipe: '.drinkImage'
  });
  list.getCharactersFromServer();
}
