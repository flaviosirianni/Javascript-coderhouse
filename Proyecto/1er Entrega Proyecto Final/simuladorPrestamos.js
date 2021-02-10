var mesesPrestamo = [12, 24, 36, 48, 60, 72];
var interesAnual = 0.66 // TNA = 66%
var cantAnios = [1,2,3,4,5];
var cuotasMaximas = [];

function guardarLocal(){
    localStorage.setItem("ultimaBusqueda", JSON.stringify(cuotasMaximas));
    localStorage.setItem("sueldo", JSON.stringify(Number(document.getElementById("sueldo").value)));
    localStorage.setItem("gastos", JSON.stringify(Number(document.getElementById("gastos").value)));
}

function usarMemoria(){
    let sueldo = document.getElementById("sueldo");
    let gastos = document.getElementById("gastos");
    sueldo.value = localStorage.getItem("sueldo");
    gastos.value = localStorage.getItem("gastos");
}

function calculoCuotaMaxMensual(){ // Funcion auxiliar de calculoPrestamoMax()
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
            cuotasMaximas = [];
            for(let i = 0; i<cantAnios.length; i++){
                    coMax.push((a / ( interesAnual / ( 1 - ((1 + interesAnual)**(-cantAnios[i])) ))).toFixed(0)); // Cálculo interés Francés -> cuotaAnual = dineroPrestado * ( interesAnual / (1 - (1 + interesAnual)^-cantAnios))
                    cuotasMaximas.push({cantMeses: (cantAnios[i]*12), maxPrestable: coMax[i]});     
                }
            let aux = document.getElementById("opcionesPrestamos"); // Verifica que no haya otros valores ya mostrados en pantalla.
            if(aux == null){
                mostrarValores(coMax); 
            } else {
                borrarValores("opcionesPrestamos");
                mostrarValores(coMax);
            }
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
    let maximoPrestable = 0;
    for(let i = 0; i < coMax2.length; i++){
        let nuevoDiv = document.createElement("div");
        nuevoDiv.setAttribute("id", "opcionesPrestamos");
        let nodoPadre = document.getElementById("opcionesPrestamo").parentNode;
        //let nodoPadre = jquery.parent("#opcionesPrestamo");
       
        let nuevoContenido = document.createTextNode("Podemos prestarte máximo $ " + coMax2[i] + " a devolver en " + ((i+1)*12) + " cuotas.");
        nuevoDiv.appendChild(nuevoContenido);
        nodoPadre.insertBefore(nuevoDiv, null);
        maximoPrestable = coMax2[i];
    }
    mostrarCuotas();
    mostrarSlider(maximoPrestable);
    
    // Ejemplo JQUERY funcional.
    console.log($("#opcionesPrestamos").parent());
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

function mostrarCuotas(){
    if(document.getElementById("masOpcionesCuotas").innerText = " "){
        document.getElementById("masOpcionesCuotas").innerHTML += `
        <br/>
        <h4> Necesitás otro importe? Seleccionalo a continuación. </h4>          
        <div>¿En cuántas cuotas querés devolver el dinero?
            <select id="cantCuotas" onclick="calcularOpcion()">
                <option value="12">12 Cuotas</option>
                <option value="24">24 Cuotas</option>
                <option value="36">36 Cuotas</option>
                <option value="48">48 Cuotas</option>
                <option value="60">60 Cuotas</option>
            </select>
            </div>
        `;
    }
}    

function mostrarSlider(maxSlider){
    if(document.getElementById("masOpcionesSlider").innerText = " "){
        document.getElementById("masOpcionesSlider").innerHTML += `
        <div> Mínimo $1.000.- Máximo ${maxSlider}.-           
            <input class="inputSlider" id="slider" name="amount" step="500" type="range" min="1000" max="${maxSlider}" onchange="moverSlider()"/>
        </div>
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


function calcularOpcion(){
    let aux = document.getElementById("cantCuotas").value;
    let i = 0;   
    switch(aux){
        case '12':
            mostrarSlider(cuotasMaximas[0].maxPrestable);
            break;
        case '24':
            mostrarSlider(cuotasMaximas[1].maxPrestable);
            break;
        case '36':
            mostrarSlider(cuotasMaximas[2].maxPrestable);
            break;
        case '48':
            mostrarSlider(cuotasMaximas[3].maxPrestable);
            break;
        case '60':
            mostrarSlider(cuotasMaximas[4].maxPrestable);
            break;
    }
}


// TODO
// Agregar más páginas html.
// Cada html debería tener su .js asociado (osea un js por cada html).

// TODO
// Agregar algo móvil tipo un slider que salga de costado o algo con fotitos.

// TODO
// cambiar los getElement por JQUERYs.

// nota -> $(".carrito") me devuelve toda la Class carrito.
// nota -> $("#carrito") ne devuelve solo el que tenga ID carrito.

// TODO ver bien todo lo que se puede hacer con Jquery.