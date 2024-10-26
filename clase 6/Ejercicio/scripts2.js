// Declaración de las variables
var santiago, paris, londres, nuevaYork, sPetersburgo, beijing, seoul = "";

//función mostrar hora actual en la cuidad que este especificada acorde al id del html
function mostrarHora (lugar ="santiago") {

    let d = new Date();  // objeto para obtener la hora actual
    let diferencia =0; // diferencia de horario pñor ciudad
    lugar.toLowerCase();

    //switch
    switch(lugar){
        case "santiago": diferencia= -3;
        break;
        case "paris": diferencia= 1;
        break;  
        case "londres": diferencia= 0;
        break;
        case "nuevaYork": diferencia= -5;
        break;
        case "sPetersburgo": diferencia= 3;
        break;
        case "beijing": diferencia= 8;
        break;
        case "seoul": diferencia= 9;
        break;
        default: break;
    }

    //diferencias de hora
    d.setHours(d.getHours() + diferencia);

    document.getElementById(lugar).innerText = `${(d.getHours())}:${d.getMinutes()}:${d.getSeconds()}`;
}


    // opinion de blackbox
    //formatear la hora , min, seg
    /*const  horas = String(d.getHours()).padStart(2, '0');
    const minutos = String(d.getMinutes()).padStart(2, '0');
    const segundos = String(d.getSeconds()).padStart(2, '0');

     //fijar hora
    document.getElementById(lugar).innerText = `${horas}:${minutos}:${segundos}`;
} */

    //hora local
    setInterval(function(){mostrarHora();}, 1000);

    var paris = () => setInterval(function(){mostrarHora("paris")}, 1000);
    var londres = () => setInterval(function(){mostrarHora("londres")}, 1000);
    var nuevaYork = () => setInterval(function(){mostrarHora("nuevaYork")}, 1000);
    var sPetersburgo = () => setInterval(function(){mostrarHora("sPetersburgo")}, 1000);
    var beijing = () => setInterval(function(){mostrarHora("beijing")}, 1000);
    var seoul = () => setInterval(function(){mostrarHora("seoul")}, 1000);

    //mostrar cambios

    setTimeout(paris, 4000)
    setTimeout(londres, 8000)
    setTimeout(nuevaYork, 12000)
    setTimeout(sPetersburgo, 16000)
    setTimeout(beijing, 20000)
    setTimeout(seoul, 24000)
