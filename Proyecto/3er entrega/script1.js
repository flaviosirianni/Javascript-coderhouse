var baseDeDatosIntereses = [];


function calculoCuotaMensual(){
    //preventdefault();
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


class tablaIntereses{
    constructor(meses, intereses){
    this.cantMeses = meses;
    this.interes = intereses;
    }
}

let meses12 = new tablaIntereses(12,8);
let meses24 = new tablaIntereses(24,10);
let meses36 = new tablaIntereses(36,12);
let meses48 = new tablaIntereses(48,14);
let meses60 = new tablaIntereses(60,16);
let meses72 = new tablaIntereses(72,18);

baseDeDatosIntereses.push(meses12);
baseDeDatosIntereses.push(meses24);
baseDeDatosIntereses.push(meses36);
baseDeDatosIntereses.push(meses48);
baseDeDatosIntereses.push(meses60);
baseDeDatosIntereses.push(meses72);
