$(document).ready(function() {
  $('#generatorButton').on('click',() => getQuote());


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
      .done(update)
      .fail(handleError);

    function update(response) {
    console.log(response)
    }

    function handleError(jqxhr, textStatus, err) {
      console.log("Request Failed: " + textStatus + ", " + err);
    }
  }// getQuote
})




