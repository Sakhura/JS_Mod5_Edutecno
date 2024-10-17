/*cambie texto*/

let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos(){
    let x = $("#titulo1");
    x.click(presionTitulo1)
    x = $("#titulo2");
    x.click(presionTitulo2)
    x = $("#boton1");
    x.click(ocultarItem);
}

function presionTitulo1(){
    let x = $("#titulo1");
    x.css("color", "red");
    x.css("background-color",  "yellow");
    x.css("font-family", "Courier");

}

function presionTitulo2(){
    let x = $("#titulo2");
    x.css("color", "blue");
    x.css("background-color",  "white");
    x.css("font-family", "Arial");

}

function ocultarItem(){
    let x = $("#lista2 li");
    x.hide();
}