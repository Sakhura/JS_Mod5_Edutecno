import {Normal, Vip} from "./clases"

$(function (){

    const intocable = new Vip()
    $('#bm').click(function(){
        const mortal = new Normal($('#email').val(), $('#pass').val());
        //usuario random
        const randomNum=(min, max ) =>Math.random(Math.random) *((max - min) +min);
        $('#Welcome').text(`Bievenido Usuario${randomNum(0, 9)}${randomNum(0, 9)}${randomNum(0, 9)}`)
        $('#WelcomeBody').text(mortal.mostrarDatos())

    })

    $('#vipButton').click(function(){
       const intocable = new Vip($('#email').val, $('#pass').val(), $('#user').val());
       intocable.mostrarDatos()
       $('#Welcome').text(`Bievenido ${intocable.username}`)
       $('#WelcomeBody').text(intocable.mostrarDatos())
       
    })
})