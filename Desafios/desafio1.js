// Flavio Sirianni - Desafío Clase 1

var sueldoUser = Number(prompt("Decime cuánto ganás"));
var gastosUser = Number(prompt("Decime cuánto gastaste este mes"));
var fecha = Number(prompt("Decime qué día es hoy"));

document.write("Todavía podés gastar $" + (sueldoUser-gastosUser));
document.write("<br>");
document.write("Por día podés gastar $ " + ((sueldoUser-gastosUser)/(30-fecha)).toFixed(0));

// Tomé como referencia 30 días como duración del mes porque no me senté a investigar cómo se usan las funciones de fecha en JS.