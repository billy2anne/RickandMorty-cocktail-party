class Characters{

constructor(data, callbacks){
  this.handleClick = this.handleClick.bind(this);
  this.data = data;
  this.name = null;
  this.chosenImage = null;
  this.characterImages = [];
  this.domElements = {
    list: {
      container: null,
      name: null
    },
    characterImage: null,
  };
  this.renderListItem = this.renderListItem.bind(this);
  this.renderCharacterImagePopOut = this.renderCharacterImagePopOut.bind(this);
  this.getCharacterImageFromServer = this.getCharacterImageFromServer.bind(this);
  this.processCharacterImageFromServer = this.processCharacterImageFromServer.bind(this);
  this.renderCharacterImagePopOut = this.renderCharacterImagePopOut.bind(this);
  this.loadCharacterImages = this.loadCharacterImages.bind(this);
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

//clicking event on row should pop up characterImage
handleClick(event){
  this.name = $(event.currentTarget).text();
  this.getCharacterImageFromServer();


}


loadCharacterImages(characterData){
  debugger;
  for (var i = 0; i < characterData.length; i++) {
    if(this.name == characterData[i].name){
      var characterPic = this.chosenImage = characterData[i].image;
      return characterPic;
    }
  }
}

renderCharacterImagePopOut(image){
  debugger;
//append to class characterImage
  var characterPic = image;
  if(characterPic){
      this.domElements.characterImage = $('<img>', {
      class: 'characterThumbnail',
      alt: 'Bartender: ' + this.name,
      src: characterPic,
    });
    return this.domElements.characterImage
  }else{
    return
  }
}

getCharacterImageFromServer(){
  debugger;
  var settings = {
    url: "https://rickandmortyapi.com/api/character/",
    method: "GET",
    dataType: 'json'
  }
  $.ajax(settings).done(this.processCharacterImageFromServer).fail(this.failedCharacterImageFromServer);
}


processCharacterImageFromServer(response){
  debugger;
  this.data = response.results;
  this.loadCharacterImages(this.data);
  this.renderCharacterImagePopOut(this.chosenImage);
  this.callbacks.click(this);



  //want to select the character name within a single object of an array of objects.
//   results: Array(20)
//   // 0: { id: 1, name: "Rick Sanchez", status: "Alive", species: "Human", type: "", … }
//   // 1: { id: 2, name: "Morty Smith", status: "Alive", species: "Human", type: "", … }
//   // 2: { id: 3, name: "Summer Smith", status: "Alive", species: "Human", type: "", … }
//   // 3: { id: 4, name: "Beth Smith", status: "Alive", species: "Human", type: "", … }
//   // 4: { id: 5, name: "Jerry Smith", status: "Alive", species: "Human", type: "", … }
//   console.log(response);
//  this.data = response.results;
//  for(var i = 0 ; i < this.data.results.lengths; i++){
//     var characterPic = this.data.results[i].image;
//     if(characterPic ===  )






}


failCharacterImageFromServer(){}


}
