class Drinks{

  constructor(){



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

    $.ajax(settings).done(this.processCharactersFromServer).fail(this.failedCharactersFromServer);
  }



}
