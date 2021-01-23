
// = es para asignar valor. 
// == es para comparar dos cosas.
/// === es para decir "extrictamente igual", en JS se suele usar este por las dudas.
// 200 == "200" te da True, en cambio 200 === "200" me da false.
// El contrario de == es =!, el contrario de === es !==.

/*
var numero = prompt("Ingresá un número");

if (numero == 1000) {
    alert("Hola Baby");
} else{
    alert("Chau Baby");
}
*/


// Número PAR o IMPAR

/*
var variable = Number(prompt("ingresá un número"));

if(variable%2 == 0){
    alert("El número es PAR")
} else{
    alert("El número es IMPAR");
}
console.log(variable);

*/

// Si en el if ponés = literalmente le cambiás el valor al número.


// var stock = prompt("Stock");
var stock = 10;
var verificador = 0;

if (stock != 10){verificador = 1};
console.log("verificador= " + verificador);


// 3 variables, x = 20, y = 40, z = 33. Preguntar si alguna es > 35.

var x = 20;
var y = 40;
var z = 33;

if (x>35 || y>35 || z>35) {console.log("Hay una variable mayor a 35")};

// En vez de VAR hay que poner LET porque es mejor, ya nos lo van a explicar. VAR no se usa más prácticamente.


