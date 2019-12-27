class Characters{

  constructor(data, callbacks){
    this.handleClick = this.handleClick.bind(this);
    this.data = data;
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
  };

  renderListItem(){
    var characterName = this.domElements.list.name = $("<div>",{
      class: 'characterNameRow',
      text: this.data,
      click: this.handleClick
    });
    return characterName
  };

  handleClick(event){
    this.name = $(event.currentTarget).text();
    this.getCharacterImageFromServer();
  };

  getCharacterImageFromServer(){
    var settings = {
      url: "https://rickandmortyapi.com/api/character/",
      method: "GET",
      dataType: 'json'
    }
    $.ajax(settings).done(this.processCharacterImageFromServer).fail(this.failedCharacterImageFromServer);
  };

  loadCharacterImages(characterData){
    for (var i = 0; i < characterData.length; i++) {
      if(this.name == characterData[i].name){
        var characterPic = this.chosenImage = characterData[i].image;
        return characterPic;
      };
    };
  };

  renderCharacterImagePopOut(image){
    debugger;

    var characterPic = image;
    if(characterPic){

    var characterImgContainer = this.domElements.characterImgContainer = $('<div>',{class: characterImgContainer})
    var figCaption = this.domElements.figCaption = $('<div>', { class: 'imageText', text: 'Hello, I am your bartender,  ' + this.name + '!'});
        this.domElements.characterImage = $('<img>', {
        class: 'characterThumbnail',
        alt: 'Bartender: ' + this.name,
        src: characterPic,
        text: this.name
      });

      characterImgContainer.append(this.domElements.characterImage, figCaption)
      return characterImgContainer;
      // return this.domElements.characterImage
    }else{
      return
    };
  };

  processCharacterImageFromServer(response){
    this.data = response.results;
    this.loadCharacterImages(this.data);
    this.renderCharacterImagePopOut(this.chosenImage);
    this.callbacks.click(this);
  };

  failCharacterImageFromServer(){
    console.log('an error has occured')
  };
}
