export const formatearFecha = (fecha) => {
  const quitarMilisegundos = fecha.slice(0, 19);
  const horaFecha = quitarMilisegundos.split("T");

  const vueltaFecha = (dato) => {
    let separado = dato.split("-");
    let convertir = `${separado[2]}-${separado[1]}-${separado[0]}`;
    return convertir;
  };
  return `${horaFecha[1]} / ${vueltaFecha(horaFecha[0])}`;
};

export const formatearPrecio = (precio) => {
  const quitarSigno = precio.slice(1, precio.length);
  const precioFinal = quitarSigno.replace(".", "");

  return precioFinal;
};

export default {
  formatearFecha,
  formatearPrecio,
};
