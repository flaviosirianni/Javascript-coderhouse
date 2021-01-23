// Clase 6 - 21/01/21

// STRINGS - Propiedades

// length -> me dice el largo
var ejemplo = "Hola Mundo";
console.log(ejemplo.length);

// toUpperCase() - toLowerCase()
let nombre = prompt("Escribí tu nombre");
if(nombre == 'Marcelo'){
    document.write("Se llama Marcelo");
} else{
    document.write("No se llama Marcelo");
}

// replace()
document.write(nombre.replace('o','a'));


// trim() -> te saca los espacios del principio y del final.
var ejemplo2 = "   Hola boludoo     ";
console.log(ejemplo2);
console.log(ejemplo2.trim().toUpperCase());

// split() -> convierte String en Array, osea me parte un string en varios.
var ejemplo3 = "Ejemplo-del-Tano";
console.log(ejemplo3.split('-'));


// typeOf() -> me devuelve como resultado literalmente el tipo de la variable.
function funcionEjemplo(){};
console.log(typeof(funcionEjemplo));
if(typeof(funcionEjemplo) == 'function'){
    console.log("Es una Función");
}


// ARRAYS - propiedades

// toString() -> me convierte un array en un string.
let array = [111,222,333,444];
console.log(array.toString());


// join(' ') -> me junta todo el array usando como concatenador lo que elija ahí adentro.
console.log(array.join('FORRO'));

// push() -> agrega un nuevo elemento al final del array con el valor que le quiera dar.
array.push('DAAALE ÑUUUUL');
console.log(array);


// concat() -> me junta 2 arrays.

let array2 = [1000,100000,1000000];
console.log(array.concat(array2));


// slice() -> agarro posiciones del array para generar uno nuevo.

let array3 = array.slice(1,3);
console.log(array3);


// Ojo que seguí laburando sobre el archivo de la clase5.

// EN EL PROYECTO MANDARLE FOTOS DE 200KB O MENOS.
// Practicar el carrito, buscar un template de un carrito y mejorarlo con Fors y demás.