class Drinks{

  constructor(callbacks){
    this.processDrinksFromServer = this.processDrinksFromServer.bind(this);
    this.renderDrinkDetails = this.renderDrinkDetails.bind(this);
    this.failedDrinksFromServer = this.failedDrinksFromServer.bind(this);
    this.randomDrinkData = [];
    this.renderDrinkImage = this.renderDrinkImage.bind(this);
    this.callbacks = callbacks;
    this.drinkImageContainer = null;
  }

  getDrinksFromServer() {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://the-cocktail-db.p.rapidapi.com/random.php",
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "507dc9b4b9mshe53c4518a66bb99p1db8cbjsn81dbe9890a0d"
      }
    }
    $.ajax(settings).done(this.processDrinksFromServer).fail(this.failedDrinksFromServer);
  }

  failedDrinksFromServer(){
    alert('error in retrieving data from server')
  }


  processDrinksFromServer(response){
    var drink = this.randomDrinkData = response.drinks[0];
    this.renderDrinkDetails(drink);
    this.renderDrinkImage(drink);
    this.callbacks.request(this);
  }

  renderDrinkDetails(randomDrink){
    $('.recipeDetails').css('background-color', '#b2683e');
    var drink = this.randomDrinkData;
    var drinkDetailsContainer = $('<div>', { class: 'drinkDetailsContainer'});
    var drinkRecommmendationHeader = $('<h1>', { class: 'drinkDetailsHeader', text: 'Bartender Recommendations: ' });
    var bartenderRecommendation = $('<div>', {class : 'bartender', text: 'Drink Type: ' + drink.strDrink});
    var drinkRecipe = $('<div>', { class: 'bartender', text: 'Drink Recipe: ' + drink.strInstructions });
    var ingredients = $('<div>', { class: 'bartender', text: 'Ingredients: ' + drink.strIngredient1 + ', ' + drink.strIngredient2});

    drinkDetailsContainer.append(drinkRecommmendationHeader, bartenderRecommendation, drinkRecipe, ingredients);
    return drinkDetailsContainer
  }

  renderDrinkImage(drink){
    var drinkImg = drink;
    if (drink){
      $('.drinkImage').css('background-color', '#b2925a')
      var container = $('<div>', {class: 'imageDrinkContainer'})
      var img = this.drinkImage = $('<img>', {
        class: 'drink',
        alt:'drink picture',
        src: drink.strDrinkThumb,
      });
      var drinkName = $('<div>', {
        class:'drinkLabel',
        text: drink.strDrink,
      })
      container.append(img, drinkName);
      return container;
    } else {
      return;
    }
  }
}
