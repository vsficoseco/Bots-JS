// SNIPPET 2 random usage bot, trigger de funciones de forma random

var randoBot = setInterval(function () {
  var theFunctions = [];

  for (var prop in rando) {
    if (typeof rando[prop] == "function") {
      theFunctions.push(prop);
    }
  }

  var randomFunctionIndex = Math.floor(Math.random() * theFunctions.length);

  rando[theFunctions[randomFunctionIndex]]();
}, 1000);

//clearInterval(randoBot)
