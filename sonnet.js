var element = document.getElementById("sonnet");


var sonnet = element.innerHTML;


orphanPosition = sonnet.indexOf("orphans");
//console.log(orphanPosition);

//console.log(sonnet.length); 

var newQuote = sonnet.replace("winter", "yuletide");

var newerQuote = newQuote.replace(/the/g, "a large ");


element.innerHTML = newerQuote;

