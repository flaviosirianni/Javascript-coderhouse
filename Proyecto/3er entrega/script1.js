var mesesPrestamo = [12, 24, 36, 48, 60, 72];
var interesAnual = 0.66 // TNA = 66%
var cantAnios = [1,2,3,4,5];


function calculoCuotaMensual(){

    var cuotaMensual = 0;
    var cuotaConInteres = 0;
    var r = document.getElementById("resultado");
    var dineroTotal = Number(document.getElementById("dineroPrestado").value);
    var cantMeses = Number(document.getElementById("plazoPago").value);
    var tot = document.getElementById("totalDevuelto");
    
    cuotaMensual = dineroTotal / cantMeses;
    cuotaConInteres = cuotaMensual + (cuotaMensual * calculoInteres());

    r.innerHTML = "Cálculo de Cuota Mensual    $ " + cuotaConInteres.toFixed(2);
    tot.innerHTML = "En total vas a tener que devolver    $ " + (cuotaConInteres * cantMeses);
}


function calculoCuotaMaxMensual(){
    let sueldo = Number(document.getElementById("sueldo").value);
    let gastos = Number(document.getElementById("gastos").value);
    let cuotaMaxMensual = (sueldo - gastos) / 2;
    console.log(cuotaMaxMensual);
    return cuotaMaxMensual;
}

function calculoPrestamoMax(){
    let coMax = [];
    let a = 12 * calculoCuotaMaxMensual();


    for(let i = 0; i<cantAnios.length; i++){
        // Cálculo interés Francés -> a = Co * ( i / (1 - (1 + i)^-n))
        coMax.push((a / ( interesAnual / ( 1 - ((1 + interesAnual)**(-cantAnios[i])) ))).toFixed(0)); 
    }
    console.log(coMax);
    
    let aux = ``;

    for(let i = 0; i < coMax.length; i++){
        // TODO hacerlo andar así como corresponde
        // aux += `
        //     <ul class="totalDevuelto">  
        //     <li>${coMax[i]}</li>
        //     </ul>
        // `;
        document.write(coMax[i]); // así está claro que no va.
    }
    
    return coMax;
}   

function calculoCuotaReal(){
    // Cálculo interés Francés -> a = Co * ( i / (1 - (1 + i)^-n))
    let aux = (calculoPrestamoMax() * ( 0.66 / ( 1 - ((1 + 0.66)^(-5)) ))) / 12;
    console.log(aux);
    return(aux);
}

// Esto no me sirve más
function calculoInteres(){
    let interes = 0;
    let plazo = Number(document.getElementById("plazoPago").value);

    for(let i = 0; i < baseDeDatosIntereses.length; i++){
        if(plazo == baseDeDatosIntereses[i].cantMeses){
            interes = baseDeDatosIntereses[i].interes;
            break;
        }
    }

    return interes/100;
}

/* 

Tengo que rediseñar todo. Preguntar no cuánto querés sino cuánto ganás y cuánto pagás de deudas.
A partir de ahí tiene que calcular el máximo posible a prestar, y permitir elegir menos si el user 
quiere. Y tiene que mostrarse tipo "en 60 cuotas es tanto x mes, en 48 cuotas es tanto x mes" y así.

El máximo tiene que estar dado por CuotaMax o por 72 meses de tope, no pueden ser infinitas cuotas solo pqe 
cierran los números.

Tengo que preguntar cuánto cobra por mes, y cuánto paga de deudas.

Máxima Relacion Cuota Ingreso
    CuotaMax -> (sueldo - deudaPrevia) / 2
    bco Macro tiene 50% si tenes cuenta, 40% si no tenes cuenta.
Monto Máximo a prestar
Monto Mínimo a prestar
Sistema de Amortización Francés
Tipo de Tasa: Fija

TNA = 66.00%
TEA = 90.12% (ver bien por qué)
CFT = 116.66% (ver bien por qué)


co = capital prestado
i = interes anual (3% -> 0.03)
n = número de períodos
a = cuota anual periódica constante

a = Co * ( i / (1 - (1 + i)^-n))

*/