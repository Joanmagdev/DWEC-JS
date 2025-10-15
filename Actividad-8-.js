
var codigo = document.getElementById('tablaCodigo');
var nombre = document.getElementById('tablaNombre');
var apellidos= document.getElementById('tablaApellidos');
var edad = document.getElementById('tablaFecha');
var calificacion = document.getElementById('tablaCalificacion');

const fecha = new Date();

var alumno = {
    "codigo": 1,
    "nombre": "Luis",
    "apellidos": "Mas Ros",
    "fecha_nacimiento" : new Date(1990,10,5),
    "calificacion" : 7.5
}
function calcularfecha(datosalumno){
    datosalumno.fecha_nacimiento = fecha - datosalumno.fecha_nacimiento;
    datosalumno.fecha_nacimiento = Math.floor(datosalumno.fecha_nacimiento/(12*31*24*60*60*1000))
    console.log(datosalumno.fecha_nacimiento);
}
calcularfecha(alumno);
codigo.textContent = alumno.codigo;
nombre.textContent = alumno.nombre;
apellidos.textContent = alumno.apellidos;
edad.textContent = alumno.fecha_nacimiento
calificacion.textContent = alumno.calificacion;
