$(function (){
    $('button').click(function () {
        var nombre =  $('#nombre').val();
        var apellido =  $('#apellido').val();
        var correo =  $('#correo').val();
        var telefono =  $('#telefono').val();
        var nota =  $('#nota').val();

        // array
        var atributos =[];
        atributos.push(nombre, apellido,correo,telefono,nota);

        function Contacto(first, last, age, cell, email, note){
            this.first = first;
            this.last = last;
            this.cell = cell;
            this.email = email;
            this.note = note;
        }
        //spread
        const contact1= new Contacto(...atributos);

        //destructuring
        const { nombreCompleto = `${nombre}  ${apellido}`} = contact1;
        $('#here').text(`Nombre: ${nombreCompleto} \n${telefono} \nEmail: ${correo} `)
    })
})