var fechaActual = new Date();

fechaActual.setFullYear(fechaActual.getFullYear() - 5);
fechaActual.setMonth(fechaActual.getMonth() - 11);
fechaActual.setDate(fechaActual.getDate() - 18);

document.writeln(fechaActual.toLocaleDateString()); 