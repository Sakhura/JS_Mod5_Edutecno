$(function (){
    $('button').click(function (){
        var a = $('#monto').val();
        var b = $('#interes').val();
        var c = $('#cuotas').val();
        console.log(`A: ${a}\nB: ${b}\nC: ${c}`)

        const calcular =(monto, interes, cuotas) => {
            const interesTotal = (monto, interes) => monto * (interes / 100);
            let x = interesTotal(monto, interes)
            let pagos =(parseInt(monto) + parseInt(x)) / cuotas

            const numeroPuntos = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            let mensaje =`No te preocupes puedes pagarlo en ${cuotas} cuotas de $${numeroPuntos(pagos)}`;

            $('#result').text(mensaje)
    }
        calcular(a,b,c)
})


    });
