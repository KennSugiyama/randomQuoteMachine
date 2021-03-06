$(document).ready(function() {
  $('#generatorButton').on('click',() => getQuote());

  function displayQuote(quoteText, author) {
    $('#quote').html(quoteText);
    $('#author').html(author);
    $('.quote-info').show();
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
      let author = "- "
      author += JSON.quoteAuthor;
      displayQuote(quoteText, author);
    }

    function handleError(jqxhr, textStatus, err) {
      console.log("Request Failed: " + textStatus + ", " + err);
    }
  }// getQuote

  $('#tweetQuote').on('click',() => {
    let tweet = "https://twitter.com/intent/tweet?text="
     tweet += $('.quote-info>#quote').text() + $('.quote-info>#author').text()
   $('.twitter-share-button').attr('href',tweet)
  })// tweetQuote
})






