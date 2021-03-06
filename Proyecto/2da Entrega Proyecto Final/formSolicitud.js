let BDSolicitantes = [];

function guardarForm(){
    localStorage.setItem("nombre", JSON.stringify(document.getElementById("nombre").value));
    localStorage.setItem("apellido", JSON.stringify(document.getElementById("apellido").value));
    localStorage.setItem("dni", JSON.stringify(Number(document.getElementById("dni").value)));
    localStorage.setItem("telefono", JSON.stringify(Number(document.getElementById("telefono").value)));
    localStorage.setItem("mail", JSON.stringify(document.getElementById("mail").value));
    
    if($("#nombre").val() && $("#apellido").val() && $("#dni").val() && $("#telefono").val() && $("#mail").val()){
        habilitarBoton();
    }

}

function finalizarProceso(){
    if($("#nombre").val() && $("#apellido").val() && $("#dni").val() && $("#telefono").val() && $("#mail").val()){
        let nuevoSolicitante = new Solicitante($("#nombre").val(), $("#apellido").val(), $("#dni").val(), $("#telefono").val(), $("#mail").val());
        BDSolicitantes.push(nuevoSolicitante);
        swal("Muchas gracias, un asesor te estará contactando en las próximas 24hs para coordinar los detalles.");
        setTimeout(() => {window.close();}, 3500);
    } else{
        swal("Por favor completa todos los campos");
    }
}

function habilitarBoton(){
    $("#finalizar").removeAttr("disabled");    
}

class Solicitante {
    constructor(nombre, apellido, dni, telefono, mail){
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.telefono = telefono;
    this.mail = mail;
    }    
}
