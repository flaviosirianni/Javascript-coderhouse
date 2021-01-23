// Flavio Sirianni - Desafío Clase 2

var sueldoUser = Number(prompt("Decime cuánto ganás"));
var gastosUser = Number(prompt("Decime cuánto gastaste este mes"));
var fecha = Number(prompt("Decime qué día (en número) es hoy"));

var diferencia = sueldoUser - gastosUser;

if(fecha>0 && fecha<=30){

    if(diferencia>0){
        document.write("Todavía podés gastar $" + (sueldoUser-gastosUser));
        document.write("<br>");
        document.write("Por día podés gastar $ " + ((sueldoUser-gastosUser)/(30-fecha)).toFixed(0));
    } else if(diferencia==0){
        document.write("Estás al horno, no tenés más plata");
    } else {
        document.write("Gastaste más de lo que tenías, estás en negativo");
    }

} else {
    alert("Fecha inválida, tenés que ingresar un número del 1 al 30");    
}


// Tomé como referencia 30 días como duración del mes porque no me senté a investigar cómo se usan las funciones de fecha en JS.