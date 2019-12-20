class Characters{

constructor(data, callbacks){
  this.data = data;
  this.domElements = {
    list: {
      container: null,
      name: null
    },
    imagePopout: {
      image: null
    },
  };
  this.renderListItem = this.renderListItem.bind(this);
  this.renderCharacterImagePopOut = this.renderCharacterImagePopOut.bind(this);
  this.callbacks = callbacks;


}

renderListItem(){
//creates one row of character name
//append div to class characterList to div
// name a variable for renderCharacterRow
//create a div with a characterNameRow class
var characterName = this.domElements.list.name = $("<div>", { class: 'characterNameRow', text: this.data, click: this.handleClick });

return characterName
}


handleClick(){
  this.getCharacterImageFromServer();
}

renderCharacterImagePopOut(){
//append to class characterImage

}

getCharacterImageFromServer(){
  debugger;
  var settings = {
    url: "https://rickandmortyapi.com/api/character",
    method: "GET",
    dataType: 'json'
  }
  $.ajax(settings).done(this.processCharacterImageFromServer).fail(this.failedCharacterImageFromServer);
}


processCharacterImageFromServer(response){
  console.log(response)


}


failCharacterImageFromServer(){}


}
