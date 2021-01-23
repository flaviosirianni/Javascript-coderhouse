

// *** OUTPUTS ***

var numeroUno = 1;
var numberoDos = 3;

// DOCUMENT.WRITE
document.write('La suma es de: ' + numeroUno+numberoDos);


// PROMPTS (no es un output)
    // No se usa en ningun proyecto real el Prompt.
var nombreMascota = prompt("Ingresá el nombre de tu mascota: ");
document.write(nombreMascota);

    // El problema del PROMPT es que siempre recibe texto, es un pop up. 
    // Si pongo números también me lo toma como texto.

// Number -> me convienrte el texto en número.
document.write(Number (nombreMascota) + 10);


// NaN cuando aparece eso en javascript es que está todo picado y anda mal.


// CONSOLA
    // Herramienta de Debug.
    // Lo pongo directamente del Chrome y entro a la consola.
    // Desde ahí mismo (Inspeccionar) puedo probar mis scripts al toque.

console.log(nombreMascota);
    // Yo pongo esto y, en la consola del chrome, me devuelve el resultado esperado.



// ALERTS
    // En vez de usar console.log uso esto, la diferencia es que esto me muestra otro pop up con el resultado.
alert(nombreMascota);

    // No quedan para producción, se usa todo console.log porque si dejás el otro quedás como un fisura de mierda.
    // Se usan pop ups diseñados de librería a lo sumo, no un alert a secas.

// Ejercicio de clase
console.log(Number (nombreMascota)*numberoDos);

