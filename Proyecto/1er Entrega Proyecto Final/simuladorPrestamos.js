var mesesPrestamo = [12, 24, 36, 48, 60, 72];
var interesAnual = 0.66 // TNA = 66%
var cantAnios = [1,2,3,4,5];
var maximoPrestable = 0;

function calculoCuotaMaxMensual(){
    let sueldo = Number(document.getElementById("sueldo").value);
    let gastos = Number(document.getElementById("gastos").value);
    let cuotaMaxMensual = (sueldo - gastos) / 2;
    return cuotaMaxMensual;
}

function calculoPrestamoMax(){
    let coMax = [];
    let sueldo = Number(document.getElementById("sueldo").value);
    let gastos = Number(document.getElementById("gastos").value);
    let a = 12 * calculoCuotaMaxMensual();
    
    if(a>0){
        if((sueldo/gastos)>=2){
            for(let i = 0; i<cantAnios.length; i++){
                    coMax.push((a / ( interesAnual / ( 1 - ((1 + interesAnual)**(-cantAnios[i])) ))).toFixed(0)); // Cálculo interés Francés -> cuotaAnual = dineroPrestado * ( interesAnual / (1 - (1 + interesAnual)^-cantAnios))
                }
            let aux2 = document.getElementById("opcionesPrestamos"); //Esto verifica que no haya otros valores ya mostrados en pantalla.
            if(aux2 == null){
                mostrarValores(coMax); 
            } else {
                borrarValores("opcionesPrestamos");
                mostrarValores(coMax);
            }
            return coMax;
        } else if((sueldo/gastos)<0){
            swal("Estás poniendo valores negativos..");
            borrarValores("opcionesPrestamos");
        } else {
            swal("Tenés que tener al menos un 50% de tu sueldo disponible para solicitar un Préstamo");
            borrarValores("opcionesPrestamos");
        }       
    } else {
        swal("Por favor ingresa correctamente los valores solicitados");
        borrarValores("opcionesPrestamos");
    }    
}   

function mostrarValores(coMax2){ 
    for(let i = 0; i < coMax2.length; i++){
        let nuevoDiv = document.createElement("div");
        nuevoDiv.setAttribute("id", "opcionesPrestamos");
        let nodoPadre = document.getElementById("opcionesPrestamo").parentNode;
        let nuevoContenido = document.createTextNode("Podemos prestarte máximo $ " + coMax2[i] + " a devolver en " + ((i+1)*12) + " cuotas.");
        nuevoDiv.appendChild(nuevoContenido);
        nodoPadre.insertBefore(nuevoDiv, null);
        maximoPrestable = coMax2[i];
    }
    mostrarSlider();
}

function borrarValores(elemento){    
    for(let i = 0; i<cantAnios.length; i++){
        var divBorrable = document.getElementById(elemento);
        if(divBorrable != null){
            divBorrable.remove();
        } else {
            break;
        }
    }
}

function mostrarSlider(){
    if(document.getElementById("masOpciones").innerText = " "){
        document.getElementById("masOpciones").innerHTML += `
        <br/><br/>
        <div> Necesitás otro importe? Seleccionalo a continuación. </div>          
        <div> Mínimo $5.000.- Máximo ${maximoPrestable}.- </div>          
        <input class="inputSlider" id="slider" name="amount" step="1000" type="range" min="5000" max="${maximoPrestable}" onchange="moverSlider()"/>
        <!--<input type="button" class="botonesTipo1" value="Consultar" onclick="consultaEspecifica()"/>-->
        `;
    }
}

function moverSlider(){   
    let valorSlider = document.getElementById("slider").value;
    let nodoPadre = document.getElementById("slider").parentNode;
    let resultado = document.createElement("div");
    resultado.setAttribute("id","mostrarResultado");
    borrarValores("mostrarResultado");    
    valorInput = document.createTextNode("Importe solicitado: $ " + valorSlider);
    resultado.appendChild(valorInput);
    nodoPadre.insertBefore(resultado,null);
}


// TODO
// Agregar más páginas html.
// Cada html debería tener su .js asociado (osea un js por cada html).

// TODO
// Agregar algo móvil tipo un slider que salga de costado o algo con fotitos.

// TODO
// Sumar LOCALSTORAGE y JSON
