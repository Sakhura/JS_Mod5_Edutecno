$(function (){
    //modificacion del DOM
    $("#code").focus("click", function (){
        $(this).css({"background-color": "lightblue", "color": "blue"});
    })
    $("#code").focus("click", function (){
        $(this).css({"background-color": "lightgreen", "color": "green"});
    })

    //Controlar eventos
    $('#bt').on({
        click: function(){
            // rojo defecto

            //narajo para el estas seguro
            $(this).text("¿Estás Seguro?")
            $(this).css({"background-color": "orange"});
        },
         // si el usuario hace doble click
        dblclick: function(){
            $(this).text("¡OK!")
            $(this).css({"background-color": "blue"});
        },

        //mouse
        "mouseleave": function(){
          if ($(this).text() =="¡OK!"){
            $(this).text("COMPRADO")
            $(this).css({"background-color": "transparent", "color": "green"});
            }
        }
    })

});