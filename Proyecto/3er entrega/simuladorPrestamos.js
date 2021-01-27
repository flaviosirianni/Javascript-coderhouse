var mesesPrestamo = [12, 24, 36, 48, 60, 72];
var interesAnual = 0.66 // TNA = 66%
var cantAnios = [1,2,3,4,5];


function calculoCuotaMaxMensual(){
    let sueldo = Number(document.getElementById("sueldo").value);
    let gastos = Number(document.getElementById("gastos").value);
    let cuotaMaxMensual = (sueldo - gastos) / 2;
    return cuotaMaxMensual;
}

function calculoPrestamoMax(){
    let coMax = [];
    let cuotaMax = calculoCuotaMaxMensual();
    let sueldo = Number(document.getElementById("sueldo").value);
    let gastos = Number(document.getElementById("gastos").value);
    let a = 12 * calculoCuotaMaxMensual();

    if(a>0){

        if((sueldo/gastos)>=2){

            for(let i = 0; i<cantAnios.length; i++){
                    // Cálculo interés Francés -> cuotaAnual = dineroPrestado * ( interesAnual / (1 - (1 + interesAnual)^-cantAnios))
                    coMax.push((a / ( interesAnual / ( 1 - ((1 + interesAnual)**(-cantAnios[i])) ))).toFixed(0)); 
                }
                console.log(coMax);

                // Muestro en pantalla las opciones de préstamo.
                let aux2 = document.getElementById("opcionesPrestamos");
                if(aux2 == null){
                    mostrarValores(coMax); 
                } else {
                    borrarValores();
                    mostrarValores(coMax);
                }
                return coMax;

        } else if((sueldo/gastos)<0){
            swal("Estás poniendo valores negativos..");
            borrarValores();
        } else {
            swal("Tenés que tener al menos un 50% de tu sueldo disponible para solicitar un Préstamo");
            borrarValores();
        }
        
    } else {
        swal("Por favor ingresa correctamente los valores solicitados");
        borrarValores();
    }
}   

function mostrarValores(coMax2){
    for(let i = 0; i < coMax2.length; i++){
        var nuevoDiv = document.createElement("div");
        nuevoDiv.setAttribute("id", "opcionesPrestamos");
        var nuevoContenido = document.createTextNode("Podemos prestarte máximo $ " + coMax2[i] + " a devolver en " + ((i+1)*12) + " cuotas");
        nuevoDiv.appendChild(nuevoContenido);
        var divActual = document.getElementById("totalDevuelto");
        document.body.insertBefore(nuevoDiv, divActual); 
    }      
}

function borrarValores(){    
    for(let i = 0; i<cantAnios.length; i++){
        var divBorrable = document.getElementById("opcionesPrestamos");
        if(divBorrable != null){
           divBorrable.remove();
        } else {
            break;
        }
    }
}



