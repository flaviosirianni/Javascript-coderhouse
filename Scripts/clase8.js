// Clase 8 - 28/01/21

// Clase DOM

// NODO -> cada una de las etiquetas. De acá se arman las jerarquías.

/* Tipos de nodos DOM

    Document -> Es el padre de todo.
    Element -> las etiquetas < t o d a s >
    Attr -> Atributos (id, class, etc).
    Text -> Nodo que contiene el texto (el contenido) de cada etiqueta.
    Comment -> Comentarios (sí, se convierten en nodos).

*/



console.log(document.getElementById("div1"));

console.log(document.getElementsByClassName("Divcito"));

// .value -> me devuelve el valor (para agarrar cosas de inputs tengo que hacerlo así)
// .innerHTML -> me devuelve del texto contenido


console.log(document.getElementById("div1"));

// miDiv.innerHTML = "Hola Marcelo";

console.log(document.getElementById("div1"));

/* Las 3 funciones más comunes para toquetear nodos son:
// document.
    getElementByID()
    getElementsByClassName()[i] -> i = nro de índice. Atrás puedo seguir poniendo tipo .style o lo que sea.
    getElementsByTagName() -> Agarro directamente la <etiqueta>.
*/

// Ejercicio de clase: hacer 2 input y que cuando se toque un botón se muestren los valores.

function mostrarDatos(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let nombreYapellido = nombre + " " + apellido;
    document.getElementById("resultado").innerHTML = nombreYapellido;
}

// Agregar y quitar elementos

var asiSeHaciaAntes = document.createElement("p");
asiSeHaciaAntes.id = "1";


// Ahora se hace así:
var asiSeHaceAhora = `
    <div id="2"> HOLA PAPA </div>
`;

console.log(asiSeHaceAhora);

var aux = document.getElementById("resultado");

aux.value = asiSeHaceAhora;

//document.body.appendChild(asiSeHaceAhora);

// Todo esto lo mejor que podés hacer es maquetarlo todo en HTML y después copiarlo al código, así no hacés cagadas.

// DATASO

// Adentro de HTML para ejecutar JS uso "${aca lo que quiera}". Puedo ejecutar código, puedo traer variables, lo que quiera.

