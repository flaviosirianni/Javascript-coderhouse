let carrito = [];

class Producto {
  constructor(nombreMarca, precioProducto, stockProducto, imagenProducto) {
    this.nombre = nombreMarca;
    this.precio = precioProducto;
    this.stock = stockProducto;
    this.imagen = imagenProducto;
  }
}

let baseDeDatos = [];

let producto1 = new Producto(
  "Zapatillas Airmax",
  750,
  3,
  "https://th.bing.com/th/id/Rd32f60f0b15c11c5057e60b9f6a74ef6?rik=2ZoE%2bgpvQFk%2fnQ&riu=http%3a%2f%2fdogrun.com.ar%2fwp-content%2fuploads%2f2016%2f10%2fPerro-feliz-wp-.jpg&ehk=rF8%2bVzgvygCJiOiA5Xb15lB3%2bNynToRJAttp%2b3XhDAw%3d&risl=&pid=ImgRaw"
);
let producto2 = new Producto("Zapatillas Jagguar", '7500', '3');
let producto3 = new Producto("Zapatillas Adidas", '700', '3');
let producto4 = new Producto("Zapatillas Mercurial", '830', '3');
let producto5 = new Producto("Zapatillas Niky", '10', '3');

baseDeDatos.push(producto1);
baseDeDatos.push(producto2);
baseDeDatos.push(producto3);
baseDeDatos.push(producto4);
baseDeDatos.push(producto5);

let aux = ``;
for (let i = 0; i < baseDeDatos.length; i++) {
  if (baseDeDatos[i].stock > 0) {
    aux += `
    <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
    <a href="#"><img class="card-img-top" src="${baseDeDatos[i].imagen}" alt=""></a>
    <div class="card-body">
    <h4 class="card-title">
    <a href="#">${baseDeDatos[i].nombre}</a>
    </h4>
    <h5>$${baseDeDatos[i].precio}</h5>
    </div>
    <div class="card-footer">
    <button onclick='agregarAlCarrito(${JSON.stringify(baseDeDatos[i])})'>Agregar al carrito</button>
    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
    </div>
    </div>
    </div>
    `;
  } else {
    aux += `
    <h2>No tenemos stock</h2>`;
  }
}

document.getElementById("productos").innerHTML = aux;

// const nuevoArray = [];
// for (let i = 0; i < baseDeDatos.length; i++) {
//   nuevoArray.push({
//     nombre: baseDeDatos[i].nombre,
//     precio: baseDeDatos[i].precio,
//   });
// }

// let producto6 = new Producto("Chanclas ATR", 10, 0);

// TODO Funcionamiento de carrito 


if (localStorage.getItem("carrito") != null) {
  console.log("Entro a la validacion");
  let valoresDelCarrito = JSON.parse(localStorage.getItem("carrito"));
  carrito = valoresDelCarrito;
}

function agregarAlCarrito(nombreProducto) {
  carrito.push(nombreProducto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function borrarUnProducto() {
  const nuevoCarrito = [];
  for(let i = 0; i < carrito.length; i++){
    if(i != 1){
      nuevoCarrito.push(carrito[i]);
    }
  }
  localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  carrito = nuevoCarrito;
}
