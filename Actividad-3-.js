var fechaActual = new Date();

fechaActual.setFullYear(fechaActual.getFullYear() + 10);
fechaActual.setMonth(fechaActual.getMonth() + 4);
fechaActual.setDate(fechaActual.getDate() + 5);

document.writeln(fechaActual.toLocaleDateString()); 