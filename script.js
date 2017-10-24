$(document).ready(function() {
  $('#generatorButton').on('click',() => getQuote());

  let getQuote = function(){
    const init = {
      method: 'getQuote',
      lang: 'en'
    }
    const url = 'http://api.forismatic.com/api/1.0/'
    fetch(url, init)
    .then(function(data) {
      console.log(data)
    })
    .catch(function(error){
      // If get error.. what do you do?
    })

  }// getQuote
})

// http://api.forismatic.com/api/1.0/?method=getQuote&lang=en