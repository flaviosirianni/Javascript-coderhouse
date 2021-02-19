// Clase 13
// 18/02/21

// Animaciones con JQuery

// Son distintas funciones, como por ejemplo:

// show() muestra un elemento del DOM.
// hide() oculta un elemento del DOM.

/*
$("button").click(function()){
    $("p.texto").fadeIn();
}
*/


function mostrarTexto(){
    $("#textoMostrado").show();    
}

function ocultarTexto(){
    $("#textoMostrado").hide();    
}


// Tenés .fadeIn()  .fadeOut()  .toggle()  etc

// Puedo activarles funciones adentro así:
// $("#botonCito").fadeIn(4000, function(){alert("Hola")}); 
// Eso se llama CALLBACK, es traer una función después de que haya transcurrido el fadeIn (4000 milisegundos).

// ARROW FUNCTION Esta es importante, puedo llamar funciones así también:
// $("#botonCito").fadeIn(4000, () => {alert("Hola")}); 

// Si quiero llamar una función que ya tengo hago así:
// $("#botonCito").fadeIn(4000, mostrarTexto); así sin paréntesis !!

function desvanecer(){
    $("#textoMostrado").fadeOut(3000);
}

function irYvolver(){
    $("#textoMostrado").fadeOut(2000, mostrarTexto);
}


// Hay una bocha mal de funciones con animaciones, investigar bien la documentación.

// si pongo .css("background-color", "yellow"); ponele, me cambia los parámetros de css que pida.
