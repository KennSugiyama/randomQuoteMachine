import { UNSPLASHED_KEY } from './secretKeys.js'

$(document).ready(function() {
  $('#generatorButton').on('click',() => console.log('UNSPLASHEDKEY'))//getQuote());

  function displayQuote(quoteText, author) {
    $('#quote').html(quoteText);
    $('#author').html(author);
  }


  let getQuote = function(){
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/",
        jsonp: "jsonp",
        dataType: "jsonp",
        data: {
          method: "getQuote",
          lang: "en",
          format: "jsonp"
        }
      })
      .done(parseJSON)
      .fail(handleError);

    function parseJSON(JSON) {
      let quoteText = JSON.quoteText;
      let author = JSON.quoteAuthor;
      displayQuote(quoteText, author);
    }

    function handleError(jqxhr, textStatus, err) {
      console.log("Request Failed: " + textStatus + ", " + err);
    }
  }// getQuote
})




