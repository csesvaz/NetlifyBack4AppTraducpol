export function convertirBooleano(a) {
  let variable = "Si";
  if (a == true) {
    variable = "Si";
  } else {
    variable = "No";
  }
  return variable;
}


export function convertirHora(fecha) {
  const hora = fecha.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return hora;
}