
var Horario = {"Lunes": 3,"Martes":3,"Miercoles":0,"Jueves":3,"Viernes": 6,"Sabado":6,"Domingo":0}

var horas = 0 ;
var Sueldo = 0;
var tarifa_finde = 20;
var tarifa_semanal = 15;
for (let dia in Horario){
    horas+= Horario[dia]
    if(dia === "Sabado" || dia === "Domingo"){
        var sueldodia1 = tarifa_finde * Horario[dia]
        Sueldo += sueldodia1
    }else{
        var sueldodia2 = tarifa_semanal * Horario[dia]
        Sueldo +=sueldodia2
    }
};
document.writeln("El empleado a trabajo "+horas+" en total");
document.writeln("<br> El sueldo es de "+Sueldo);


document.writeln(" <br> ----------------------------------------------------");

var fecha = new Date();
var tarifa_f = 20;
var tarifa_s = 15;

diaSemana = fecha.getDay();

var horasTrabajadas = 8;

if(diaSemana >5 || diaSemana < 0){
    var sueldototal = horasTrabajadas * tarifa_f;
}else{
    var sueldototal = horasTrabajadas * tarifa_s;
};

document.writeln("<br> el sueldo del empleado por las horas trabajadas el "
    +fecha.toLocaleDateString()+" es de "+sueldototal);