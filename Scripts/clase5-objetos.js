// Clase que viene -> 1ra entrega proyecto.
// html y css (puede ser un template). Variables y Objetos necesarios en js.
// Hacerlo con GitHub y pasarles el link. Es así como se hace en la vida real.

// OBJETOS

// class -> creo un objeto.
// Propiedades -> Variables dentro de un objeto.
// Métodos -> Funciones dentro de un objeto.



// Así se crea un objeto de forma fina.

class Automovil{

    constructor(){
    // constructor -> inicializa algo.
    }

    Arrancar(){

    }

    Apagar(){

    }

}


// Forma más cabeza de crear un objeto.
// no se utiliza hacerlo así, puedo asignar cuantas variables quiera, pero queda muy fisura armarlo así.
// sirve solo para hacer algo muy sencillo, muy chqiuito.

var miAuto = new Object();
miAuto.marca = "Ford";
miAuto.modelo = "Mustang";
miAuto.anio = 1969;

// CLAVE para poder hacer esto de abajo, es AltGr + {  para hacer esas comillas locas.
console.log(`Este ${miAuto.marca} ${miAuto.modelo} del año ${miAuto.anio} es lo mejor que me pasó en la vida nene.`);


// nombreObjeto. me tira en azul las Propiedades y en violeta los Métodos. En "abc" te tira las palabras que lee pero no interpreta cómo te pueden ayudar.


// Función constructora:

function Auto(nombreDeMarca){
    this.marca = nombreDeMarca;
}

let miNuevoAuto = new Auto('Ferrari');

console.log(miNuevoAuto.marca);


function Sumar(num1, num2){
    console.log(num1 + num2);
}

Sumar(45,90);


function Producto(nombreProd, precioProd, stockProd){
    this.nombre = nombreProd;
    this.precio = precioProd;
    this.stock = stockProd;
}

let Producto1 = new Producto("Tomates",1500,12);
console.log(Producto1);


// document.getElementById("carrito").innerHTML = `
// <div> 
//     <h2>${Producto1.nombre}</h2>
//     <p>${Producto1.precio}</p>
// </div>
// `;

class ProductoDeNuevo {
    constructor(nombreMark,nomPatente,nomPrecio){
        this.marca = nombreMark;
        this.patente = nomPatente;
        this.precio = nomPrecio;
    }
}


// Ojo con esta, muy buena la baseDeDatos para manejarla así.

let otroProductoMasI = new ProductoDeNuevo("Ferrari","ABC123",1500);
let otroProductoMasII = new ProductoDeNuevo("Ferrari","ABC123",1500);
let otroProductoMasIII = new ProductoDeNuevo("Ferrari","ABC123",1500);
let otroProductoMasIV = new ProductoDeNuevo("Ferrari","ABC123",1500);

const baseDeDatos = [otroProductoMasI, otroProductoMasII, otroProductoMasIII, otroProductoMasIV];

console.log(baseDeDatos);



// desafio de clase -> objeto con 3 propiedades.

class Pj {
    constructor(nombrePJ, clasePJ, manaPJ, vidaPJ){
    this.nombre = nombrePJ;
    this.clase = clasePJ;
    this.vida = vidaPJ;
    this.mana = manaPJ;
    }    
}

let Pj1 = new Pj("Duruk","Barbaro", 150, 700);
console.log(Pj1);



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


