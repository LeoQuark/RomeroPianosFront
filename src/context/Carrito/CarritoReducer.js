import { types } from "./types.js";

export default (state, action) => {
  const { payload, type } = action;
  const { id, nombre, tipo, precio, cantidad } = payload;
  switch (type) {
    case types.ADD_TO_CART:
      return {
        id,
        nombre,
        tipo,
        precio,
        cantidad,
      };
    case types.CLEAR_CART:
      return {
        id: "",
        nombre: "",
        tipo: "",
        precio: "",
        cantidad: "",
      };
    default:
      return state;
  }
};
