var acumulador = 0;

function sumar(numUno,numDos){
    var resultado = numUno + numDos;
    acumulador = acumulador + resultado;
    return acumulador;
    // con el Return devuelvo el valor que yo quiera como resultado cuando llaman a mi funcion sumar desde afuera.
}

function mostrarAcumulador(){
    let primero = Number(prompt("Ingresá el primer número"));
    let segundo  = Number(prompt("Ingresá el segundo número"));
    var resultado = sumar(primero,segundo);
    console.log(resultado);
    // document.getElementById("resultado").innerHTML = '<b> ${resultado} </b>';
    // Esto no entendí como era, tampoco me funciona así. Tiene algo en el html también.
    // averiguar qué es el DIV en HTML.
}

// Ejercicio de Clase 2, separado en funciones.

var sueldoUser = Number(prompt("Decime cuánto ganás"));
var gastosUser = Number(prompt("Decime cuánto gastaste este mes"));
var fecha = Number(prompt("Decime qué día (en número) es hoy"));


//function diferencia(){
    var diferencia = sueldoUser - gastosUser;
    //return diferencia;
//}

function devolucion(){
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


//devolucion();
}