
function  mostrarHora(){
    const fecha = new Date();

    var tiempo = fecha.toLocaleTimeString(); 
    document.getElementById('reloj').textContent = tiempo;
    return tiempo;
    
}
mostrarHora(); 
bucle = setInterval(mostrarHora,1000);
function parar(){
    
}
