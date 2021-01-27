// 26/1

// Storage y JSON

// JSON es un objeto puntual.
// el Storage es otro objeto. Es un local storage, lo guarda el navegador, es como unas cookies pero no sale del chrome, o algo así.

// localStorage: se guarda en el navegador de por vida hasta que lo borres a mano.
// sessionStorage: se guarda hasta cerrar la pestaña (se puede cambiar a mano esto).


// setItem

// ésta se usa.
localStorage.setItem('Nombre', 'Miguel Antonio');

// se puede hacer así también pero no gusta.
localStorage.Nombre='Miguel Antonio';

// Esto lo busco para ver si anda desde la Consola, la pestaña Aplicación.

localStorage.removeItem('Nombre'); // borra el valor de la Key 'Nombre'
sessionStorage.removeItem('Nombre');

localStorage.clear(); // este borra toda la info de TODOS mis localStorage.
sessionStorage.clear(); // este borra toda la info de TODOS mis sessionStorage.
// El valor por defecto de los localStorage está definido y es null.



// esto lo traje de clase 5 y 6.

function ProductoNuevo(nombreProd, precioProd, stockProd){
    // PROPIEDADES
        this.nombre = nombreProd;
        this.precio = precioProd;
        this.stock = stockProd;
    
    // METODOS
        this.mostrarProducto = function(){
            alert(this.nombre + " " + this.precio + " " + this.stock);
        }
    }
    
    let productoMIL = new ProductoNuevo("productoMIL", 1200, 1540);
    productoMIL.mostrarProducto();

    let productoClase6_1 = new ProductoNuevo('Zapatilla1',1000,15);
    let productoClase6_2 = new ProductoNuevo('Zapatilla2',1000,15);
    let productoClase6_3 = new ProductoNuevo('Zapatilla3',1000,15);
    let productoClase6_4 = new ProductoNuevo('Zapatilla4',1000,15);
    
    let baseDeDatosClase6 = [];
    
    baseDeDatosClase6.push(productoClase6_1);
    baseDeDatosClase6.push(productoClase6_2);
    baseDeDatosClase6.push(productoClase6_3);
    baseDeDatosClase6.push(productoClase6_4);


let carrito = [baseDeDatosClase6];


/* localStorage y sessionStorage solamente guardan TEXTO, entonces tenés que convertirlo en String si lo
usas para cosas como arrays de objetos. Si es un número lo convierte solo, obvio, pero si es algo complejo
tenés que pasarlo a texto.
*/

// Se hace con JSON.Stringify

function argegarAlCarrito(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


// JSON -> es otra forma de crear cosas sin hacerlo mediante un objeto. Es un objeto también.

let nuevoJSON = {nombre:'Pablo', apellido:'Picapiedra', edad:'de piedra xd'};
// eso se puede hacer poniendo las comillas en las variables también, funciona.

console.log(nuevoJSON);

// OJO CON ESTO. Brutal.
let nuevoJSON2 = {nombre:'Pablo', apellido:'Picapiedra', edad:'de piedra xd', productos: baseDeDatosClase6};

console.log(nuevoJSON2);


// También puedo hacer ESTO.
const nuevoArray = [];
for (let i = 0; i < baseDeDatosClase6.length; i++){
    nuevoArray.push({nombre: baseDeDatosClase6[i].nombre, precio: baseDeDatosClase6[i].precio})
}
console.log(nuevoArray);

// MUY CLAVE los JSon.
// los datos en formato JSON se pueden almacenar en archivos externos .json. 
// hacer esto me permite generar una base de datos local y después la puedo usar para otras cosas llamándola.

// JSON es un FORMATO DE DATOS (es un objeto), no tiene métodos, sólo propiedades.

// json.parse(); recibe un JSON como parámetro y lo convierte en el objeto que corresponda de Javascript.

let vueltaaObjeto = JSON.parse(localStorage.getItem("carrito"));
console.log(vueltaaObjeto);

// Si yo no hago ese paso, si pido el console.log me devuelve todo pero en TEXTO!! no en objeto (array o whatever)


// Ejercicio para hacer
/* Agregar productos que se almacenen en un storage y en un array JSON.
*/



