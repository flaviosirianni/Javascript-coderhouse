// Clase 14 - 23/02/21
// Script SYNC vs ASYNC vs DEFER -> https://cybmeta.com/diferencia-async-y-defer 
// AJAX con JQuery (se puede hacer con js nativo pero es un choclaso enorme)
/*
Verbos HTTP (hay más) para comunicar el front con el servidor.

 ESTO APARENTEMENTE NO ANDA SI NO ESTAS USANDO LIVESERVER, sino no hay server xD
 Para instalar live server voy al visual studio -> extensiones -> y ahi ta.
 Despues reinicio el visual studio y toco abajo a la derecha GO LIVE.

GET -> Tomar datos.
POST -> Enviar datos.
FETCH -> Es la forma más cheta de hacer GET.

.THEN -> Promesas.

Con JQuery la info del servidor me viene en JSON.

$.get("nombreURL/Archivo", funcionCallback(data,status){});
*/


$.get('data(3).json', function(datos,estado){
    console.log(datos);
});

$.post('data(3).json',function(){});


// Con $.GET puedo traer APIs para mostrar cosas como por ejemplo el clima o el precio del dólar o mil cosas
// más. Hay infinidad de data para traer. Ojo con esto.

// Funcion $.ajax CLAVE me tira todo ordenadito y ahí pongo si es post o get o lo que sea.

// OJO !!! POST no es para pushear datos, sino solo para enviar información y que el servidor devuelva
// una validación, o una respuesta, usando los parámetros que le mande.

// Para el PROYECTO puedo pedir API para cotización de dólares. En la API del BCRA puedo sacarlo. 
// También puedo guardar en un JSON las tasas de interés y llamarlo con AJAX.
// Puedo usar API de noticias para traer la actualidad económica o algo así.

// En vez de crear un JSON para mi database puedo por ejemplo usar la API de ML para traer mi carrito con ellos.


