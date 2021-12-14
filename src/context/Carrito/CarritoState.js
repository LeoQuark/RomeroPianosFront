import React, { useReducer } from "react";
import CarritoContext from "./CarritoContext";
import CarritoReducer from "./CarritoReducer";
import { types } from "./types.js";

//Creación del estado global Carrito, donde se hará uso de useContext y useReducer.
export const CarritoState = (props) => {
  const initialState = {
    id: "",
    nombre: "",
    tipo: "",
    precio: "",
    cantidad: "",
  };

  const [carrito, dispatch] = useReducer(CarritoReducer, initialState);

  const agregarProducto = (dato) => {
    dispatch({
      type: types.ADD_TO_CART,
      payload: dato,
    });
  };

  const limpiarCarro = (initialState) => {
    dispatch({
      type: types.CLEAR_CART,
      payload: initialState,
    });
  };

  //Se retorna el CarritoContext.Provider para que los hijos de este componente puedan acceder a los valores del state global carrito y sus metodos o funciones.
  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarProducto,
        limpiarCarro,
      }}
    >
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoState;
