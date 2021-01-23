

function calculoCuotaMensual(){
    //preventdefault();
    var cuotaMensual = 0;
    var cuotaConInteres = 0;
    var r = document.getElementById("resultado");
    var dineroTotal = document.getElementById("dineroPrestado").value;
    var cantMeses = document.getElementById("plazoPago").value;
    var tot = document.getElementById("totalDevuelto");
    
    cuotaMensual = dineroTotal / cantMeses;
    cuotaConInteres = cuotaMensual + (cuotaMensual * calculoInteres());

    r.innerHTML = "Cálculo de Cuota Mensual    $ " + cuotaConInteres.toFixed(2);
    tot.innerHTML = "En total vas a tener que devolver    $ " + (cuotaConInteres*cantMeses);
}

function calculoInteres(){
    var interes = 0;
    var plazo = document.getElementById("plazoPago").value;

    // Esto no sé cómo resumirlo mejor, tendría que sacar los valores directamente de la tabla html pero ni idea cómo se hace.
    
    if(plazo == 12){interes=8};
    if(plazo == 24){interes=10};
    if(plazo == 36){interes=12};
    if(plazo == 48){interes=14};
    if(plazo == 60){interes=16};
    if(plazo == 72){interes=18};


    return interes/100;
}