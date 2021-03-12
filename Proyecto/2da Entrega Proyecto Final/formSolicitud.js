let BDSolicitantes = [];

function validarForm(){   
    if($("#nombre").val() && $("#apellido").val() && $("#dni").val() && $("#telefono").val() && $("#mail").val()){
        habilitarBoton();
    }
}

function finalizarProceso(){
    if($("#nombre").val() && $("#apellido").val() && $("#dni").val() && $("#telefono").val() && $("#mail").val()){
        let nuevaSolicitud = {
            nombre: $("#nombre").val(),
            apellido: $("#apellido").val(),
            dni: $("#dni").val(),
            telefono: $("#telefono").val(),
            mail: $("#mail").val()
        };
        BDSolicitantes.push(nuevaSolicitud);
        swal("Muchas gracias, un asesor te estará contactando en las próximas 24hs para coordinar los detalles.");
        setTimeout(() => {window.close();}, 3500);
    } else{
        swal("Por favor completa todos los campos");
    }
}

function habilitarBoton(){
    $("#finalizar").removeAttr("disabled");    
}

