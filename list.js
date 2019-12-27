
class BarList {
  constructor(elementConfig){
    this.handleRowClick = this.handleRowClick.bind(this);
    this.characters = [];
    this.characterPic = null;
    this.getCharactersFromServer = this.getCharactersFromServer.bind(this);
    this.processCharactersFromServer = this.processCharactersFromServer.bind(this);
    this.failedCharactersFromServer = this.failedCharactersFromServer.bind(this);
    this.loadCharacter = this.loadCharacter.bind(this);
    this.addCharacter = this.addCharacter.bind(this);
    this.getDrinksData = this.getDrinksData.bind(this);
    this.renderRandomDrinkRecipe = this.renderRandomDrinkRecipe.bind(this);
    this.domElements = {
      areas: {
        list: $(elementConfig.characterListArea),
        characterImage: $(elementConfig.characterDetailsArea),
        randomDrink: $(elementConfig.recipeDetails)
      }
    };
  };

  addCharacter(characterData) {
    var newCharacter = new Characters(characterData, {
      click: this.handleRowClick,
    });
    this.characters.push(newCharacter);
    return this.characters.length;
  };

  loadCharacter(characterList) {
    for (var i = 0; i < characterList.length; i++) {
      this.addCharacter(characterList[i].name);
    };
  };

  handleRowClick(characters){
    var renderCharacterImage = characters.chosenImage;
    var imageRow = characters.renderCharacterImagePopOut(renderCharacterImage);
    this.domElements.areas.characterImage.empty().append(imageRow);
    this.getDrinksData();
  };


  render(charactersList){
    //create renderlist item in characters.js
  var  charactersRenderList = charactersList.map(value => value.renderListItem());
  this.domElements.areas.list.empty().append(charactersRenderList);
  };

  renderRandomDrinkRecipe(randomDrink){
    debugger;
    var drink = randomDrink.randomDrinkData
    var drinkDetailstoAppend = randomDrink.renderDrinkDetails(drink)
    console.log(randomDrink);
   this.domElements.areas.randomDrink.empty().append(drinkDetailstoAppend);

  }

  //left off on drinksdata
  getDrinksData(){
    debugger;
    var drink = new Drinks({request: this.renderRandomDrinkRecipe});
      drink.getDrinksFromServer();
  }

  getCharactersFromServer(){
    var settings = {
      url: "https://rickandmortyapi.com/api/character",
      method: "GET",
      dataType: 'json'
    };
    $.ajax(settings).done(this.processCharactersFromServer).fail(this.failedCharactersFromServer);
  };


  processCharactersFromServer(response){
      this.loadCharacter(response.results);
      this.render(this.characters);
  };

  failedCharactersFromServer(){
    console.log('there was an error');
  };
};
