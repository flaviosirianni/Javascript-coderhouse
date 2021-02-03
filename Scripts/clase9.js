// Clase 9 - 02/02/21

// EVENTOS

/*

Los eventos sirven para controlar las acciones de los usuarios y definir un comportamiento desencadenante.
.onclick es un evento por ejemplo.


Las funciones reciben eventos, no hace falta pedirlos, lo reciben igual y podemos usarlo o no.
window.event -> me sirve para sacar información contextual, por ejemplo qué tecla presionó el usuario.
*/

// Esto combinado con pedir el event en html me devuelve toda la data asociada al onclick (o al evento que quiera pedir)

function funcion(event){
    console.log(event);
}

// Ejercicio de clase.
function validarPassword(){
    let password = document.getElementById("password").value;
    if(password.length > 4){
        alert("La contraseña tiene más de 4 caracteres");
    } else{
        alert("La contraseña tiene 4 o menos caracteres");
    }
    console.log(password.length);
}