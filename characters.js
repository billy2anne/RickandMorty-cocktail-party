class Characters{

constructor(data, callbacks){
  this.data = data;
  this.domElements = {
    list: {
      name: null
    },
    imagePopout: {
      image: null
    },
  };
  this.callbacks = callbacks;

}

renderListItem(){
//creates one row of character name
//append div to class characterList to div
// name a variable for renderCharacterRow
//create a div with a characterNameRow class
var characterContainer = this.domElements.list.container =
$("<div>", { class: 'productContainer', text: 'Choose a Bartender!' });
var characterName = this.domElements.list.name = $("<div>", { class: 'characterNameRow', text: this.data.results.name });
return characterContainer
}

renderCharacterImagePopOut(){
//append to class characterImage
//

}

getCharacterDetailsFromServer(){}


processCharacterDetailsFromServer(){}


failCharacterDetailsFromServer(){}
















}
