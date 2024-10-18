$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();

        $(".error").text("");

        let hasError = false;

        $("#miBoton").click(function(eve){

            console.log("boton hizo click");
        }
            )

        //validar nombre

        let nombre =$("#nombre").val();
        if(nombre === ""){
            $("#nombreError").text("El nombre es obligatorio");
            hasError = true;
        }

        let apellido =$("#apellido").val();
        if(apellido === ""){
            $("#apellidoError").text("El apellido es obligatorio");
            hasError = true;
        }

        let correo =$("#correo").val();
        if(correo === ""){
            $("#correoError").text("El correo es obligatorio");
            hasError = true;
        } else if(!/\S+@\S+\.\S+/.test(correo)){
            $("#correoError").text("El correo no es válido");
            hasError = true;
        }
        
        let telefono =$("#telefono").val();
        if(telefono === ""){
            $("#telefonoError").text("El telefono es obligatorio");
            hasError = true;
        } else if (!/^\d{3}-\d{3}-\d{4}$/.test(telefono)){
            $("#telefonoError").text("El telefono solo puede contener números");
            hasError = true;
        }

        if(!hasError){
            alert("Formulario enviado con exito");
            this.submit();
        }

    });
});