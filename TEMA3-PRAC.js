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

    var nombreMayus = nombre.toUpperCase();
    
    var nombreYapellidos = apellidos +", " +nombreMayus;

    document.getElementById('nombreyapellidos').textContent = nombreYapellidos;
}

