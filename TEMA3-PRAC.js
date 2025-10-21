function actualizar(){
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var fecha = new Date(document.getElementById('fecha').value);
    var direccion = document.getElementById('direccion').value;
    var poblacion = document.getElementById('poblacion').value;
    var idiomas = document.getElementById('idiomas').value;
    var hijos = document.getElementById('hijos').value;

    console.log("Nombre: " + nombre);
    console.log("apellidos: " + apellidos);
    console.log("fecha: " + fecha);
    console.log("Dirección: " + direccion);
    console.log("poblacion: " + poblacion);
    console.log("idiomas: " + idiomas);
    console.log("hijos: " + hijos);

    //Hacer Mayus el nombre y juntar el apellido y nombre en una cadena de texto
    var nombreMayus = nombre.toUpperCase();
    var nombreYapellidos = apellidos +", " +nombreMayus;
    
    //Calcular la edad de el usuario
    var edad = new Date() - fecha;
    var edadFinal = Math.floor(edad/(1000 * 60 * 60 * 24 * 365.25)) 

    //Separar el codigo postal y la poblacion a la que pertenece el usuario
    var codigopostal = poblacion.split("-");
    var ciudad = codigopostal[1];
    var postal = codigopostal[0];
    
    //Contar la cantidad de hijos que se han introducido 
    var hijosNombres = hijos.split("-");
    var CantidadHijos = hijosNombres.length;

    document.getElementById('nombreyapellidos').textContent = nombreYapellidos;
    document.getElementById('edad').textContent = edadFinal;
    document.getElementById('codigoPostal').textContent = postal;
    document.getElementById('poblado').textContent = ciudad;
    document.getElementById('numeroHijos').textContent = CantidadHijos;

    

    /*
    for(var i = 0 ; i < CantidadHijos ; i++){
        const columna = document.getElementById('hijosInsertar');
        
        if(columna){

            var newHijo = document.createElement('tr');
            newHijo.textContent = hijosNombres[i]
            columna.appendChild(newHijo);
            console.log("celda creada");
        }else{
            console.log("No va");
        }

    }*/
}

