
class BarList {
  constructor(elementConfig){
    this.characters = [];
    this.processCharactersFromServer = this.processCharactersFromServer.bind(this);
    this.failedCharactersFromServer = this.failedCharactersFromServer.bind(this);
    this.loadCharacter = this.loadCharacter.bind(this);
    this.addCharacter = this.addCharacter.bind(this);







  }

  //LEFT OFF ON ADD CHARACTER

  addCharacter(characterData){
    var newCharacter = new Character(characterData, {
      click: this.handleRowClick,
    });
    this.characters.push(newCharacter);
    return this.characters.length;
  }



  loadCharacter(characterList){
    for (var i = 0; i < characterList.length; i++){
      this.addCharacter(characterList[i]);
    }
  }



  render(charactersList){
    //create renderlist item in characters.js
  var  charactersRenderList = charactersList.map(value => value.renderListItem());
  this.domElements.areas.list.empty().append(charactersRenderList);
  }

  displayCharacters(){}


getCharactersFromServer(){
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

     $.ajax(settings).done(this.processCharactersFromServer).fail(this.failedCharactersFromServer);
}


processCharactersFromServer(){
    this.loadCharacter(response.results.name);
    this.render(this.characters);

}

failedCharactersFromServer(){
  console.log('there was an error')

}




}
