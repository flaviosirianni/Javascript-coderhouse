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
    //let sueldo = $("#sueldo");
    //let gastos = $("#gastos");
    sueldo.value = localStorage.getItem("sueldo");
    gastos.value = localStorage.getItem("gastos");
}

function calculoCuotaMaxMensual(){ // Funcion auxiliar de calculoPrestamoMax()
    let sueldo = $("#sueldo").val();
    let gastos = $("#gastos").val();
    let cuotaMaxMensual = (sueldo - gastos) / 2;
    return cuotaMaxMensual;
}

function calculoPrestamoMax(){
    let coMax = [];
    let sueldo = $("#sueldo").val();
    let gastos = $("#gastos").val();
    let a = 12 * calculoCuotaMaxMensual();
    if(a>0){
        if((sueldo/gastos)>=2){
            cuotasMaximas = [];
            for(let i = 0; i<cantAnios.length; i++){
                    coMax.push((a / ( interesAnual / ( 1 - ((1 + interesAnual)**(-cantAnios[i])) ))).toFixed(0)); // Cálculo interés Francés -> cuotaAnual = dineroPrestado * ( interesAnual / (1 - (1 + interesAnual)^-cantAnios))
                    cuotasMaximas.push({cantMeses: (cantAnios[i]*12), maxPrestable: coMax[i]});     
                }
            let aux = $("#opcionesPrestamos"); // Verifica que no haya otros valores ya mostrados en pantalla.
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
        let nuevoContenido = document.createTextNode("En " + ((i+1)*12) + " cuotas, podemos prestarte hasta $ " + coMax2[i]);
        nuevoDiv.appendChild(nuevoContenido);
        nodoPadre.insertBefore(nuevoDiv, null);
        maximoPrestable = coMax2[i];
    }
    mostrarCuotas();
    mostrarSlider(maximoPrestable);
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
    if(!$("#masOpcionesCuotas").text()){
        $("#masOpcionesCuotas").html(`
        <br/>
        <h4> Elegí el préstamo que más se adapte a tus necesidades</h4>          
        <div>¿En cuántas cuotas querés devolver el dinero?
            <select id="cantCuotas" onclick="calcularOpcion()">
                <option value="12">12 Cuotas</option>
                <option value="24">24 Cuotas</option>
                <option value="36">36 Cuotas</option>
                <option value="48">48 Cuotas</option>
                <option value="60">60 Cuotas</option>
            </select>
            </div>
        `);
    }
}    

function mostrarSlider(maxSlider){
    $("#masOpcionesSlider").html(`
        <div> Mínimo $1.000.- Máximo ${maxSlider}.-
            <br>           
            <input class="inputSlider" id="slider" name="amount" step="500" type="range" min="1000" max="${maxSlider}" onchange="moverSlider()"/>
        </div>
    `);
}

function moverSlider(){   
    let valorSlider = $("#slider").val();
    let nodoPadre = document.getElementById("slider").parentNode;
    let resultado = document.createElement("h4");
    resultado.setAttribute("id","mostrarResultado");
    borrarValores("mostrarResultado");    
    valorInput = document.createTextNode("Importe a solicitar: $ " + valorSlider);
    resultado.appendChild(valorInput);
    nodoPadre.insertBefore(resultado,null);
}

function calcularOpcion(){
    let aux = $("#cantCuotas").val();
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


function mostrarAyuda(){
    $("#textoAyuda").fadeIn(300);
}

function ocultarAyuda(){
    $("#textoAyuda").fadeOut(300);
}

// TODO
// Agregar más páginas html.
// Cada html debería tener su .js asociado (osea un js por cada html).

// TODO
// Agregar algo móvil tipo un slider que salga de costado o algo con fotitos.

// TODO
// Más JQuery