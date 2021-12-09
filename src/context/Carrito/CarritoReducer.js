import { types } from "./types.js";

export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case types.ADD_TO_CART:
      return {
        productos: [...state.productos, payload],
      };
    case types.REMOVE_ONE_FROM_CART:
      return {
        // seleccionados: [...state.seleccionados],
        productos: [...state.productos.filter((rm) => rm != payload)],
      };
    case types.REMOVE_ALL_FROM_CART:
      return {};
    case types.CLEAR_CART:
      return {};
    default:
      return state;
  }
};
