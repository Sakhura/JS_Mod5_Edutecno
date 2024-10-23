$(function ( ) {
    $('form').on('change', ':checkbox', function(){
        var checkedBoxes = new Set();
        var tareasCompletadas = new Set();

        if ($(this).is(':checked')){
            checkedBoxes.add($(this).val());
            tareasCompletadas.add($(this).val());

            $(this).siblings().css({
                color: 'gray',
                textDecoration: 'line-through'
            })
        }

        var tareaStatus = new Map();

        function Entrada(key, value){
            this.key = key;
            this.value = value;
        }

        for (const box of checkedBoxes){
            for (const tarea of tareasCompletadas){
                var entradaNueva = new Entrada (box, tarea)
                tareaStatus.set(entradaNueva.key, entradaNueva.value)
            }
        }
    })
})