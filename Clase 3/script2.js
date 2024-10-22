$(function(){

    $('#dollar1', '#dollar2').hide();
    var ingApplied=[];

    $('form').on('change', ':checkbox', function(){
        const value = $(this).val();

        if($(this).is('checked')){
            ingApplied.push(value);
        }else{
            ingApplied = ingApplied.filter(item => item !== value);
        }
        $('#ingreSelect').text(ingApplied.join(', '));

        if(ingApplied.length > 3){
            const ingExtras =  ingApplied.slice -3;
            const precioExtra = 800 * ingExtras;
            console.log(`precioExtra: ${precioExtra}`);
            $('#dollar1').show();
            $('#extraPrice').text(precioExtra);
            $('#extraIngredients').text(ingApplied.slice(3).join(', '));

        }else{
            $('#dollar1').hide();
            $('#extraPrice').text('');
        }

    });
    
    $('#thankGod').click(function(){
        const amount = $(this).val() || 1000;
        $('#tip').text(amount).val(amount);
        $('#dollar2').show();
});

$('button').click(function(){
    const tipValue = $('#tip').val();
    const miPromesa = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            tipValue !== ''? resolve(`Su propina de $${tipValue} ha sido enviada`)
            :reject("Aun no ha definido propina");
        }, 1000);
    });
    miPromesa.then(
        value => {
            alert(value);
            console.log(value);
            }
);
});
});