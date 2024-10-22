$(function (){
    $('#dollar1').hide();
    $('#dollar2').hide();

    var ingApplied=[]
    $('form').on('change', ':checkbox', function(){
        if ($(this).is(':checked')){
            ingApplied.push($(this).val());
        }else{
            const index = ingApplied.indexOf($(this).val());
            if (index > -1) {
                ingApplied.splice(index, 1);
        }
    }
    $('#ingreSelect').text(ingApplied)
    if(ingApplied.length > 3){
        let ingExtras= ingApplied.length -3
        let precioExtra= 800 *ingExtras
        console.log(`precioExtra: ${precioExtra}`)
        $('#dollar1').show();

        $('#extraPrice').text(ingApplied(3))

    }
    $('#extraIngredients').text(ingApplied(3))
});

$('#thankGod').click(function(){
    const tip =(amount = 1000) =>{
        $('#tip').text(`${amount}`)
        $('#tip').val(amount)
        $('#dollar2').show();
    }
    if ($(this).val()== ''){
        tip();
    }else{
        tip($(this).val());
    }
})

$('button').click(function (){
    var miPromesa = new Promise(function(miResolucion, miRechazo){
        setTimeout(function () {
            if($('tip').val() !== ''){
                miResolucion(`Su propina es de $${$('#tip').val()} ha sido enviada`);
            }else{
                miRechazo('No se ha enviado la propina');
            }
            
        }, 1000);
    });
    miPromesa.then(
        function(value){
            alert(value);
            console.log(value)
            },
            function(value){
                alert(value);
                console.log(value)
}
);
});

});