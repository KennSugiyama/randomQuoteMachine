$(document).ready(function() {
  $("#generatorButton").on("click",() => generateQuote());

  let generateQuote = function(){
    let url="http://api.forismatic.com/api/1.0/?method=getQuote&lang=en"


  }// generateQuote

  function apiConnector(url) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.send();
    xhr.addEventListener('readystatechange', processRequest,false);

    function processRequest(e) {
      if (xhr.readyState == 4 & xhr.status == 200) {
        let response = JSON.parse(xhr.responseText);
        return response
      }
    }
  }// apiConnection

})