import React, { useReducer } from "react";
import CarritoContext from "./CarritoContext";
import CarritoReducer from "./CarritoReducer";

//Creación del estado global User, donde se hará uso de useContext y useReducer.
export const CarritoState = (props) => {
  const initialState = {
    isLoged: false,
    id_usuario: "",
    nombre: "",
    correo: "",
  };

  const [usuario, dispatch] = useReducer(UsuarioReducer, initialState);

  const setUsuario = (datos) => {
    // console.log(datos);
    dispatch({
      type: "SET_LOGIN",
      payload: datos,
    });
  };

  // const signOff = (datos) => {
  //   dispatch({
  //     type: "SIGN_OFF",
  //     payload: datos,
  //   });
  // };

  //Se retorna el UserContext.Provider para que los hijos de este componente puedan acceder a los valores del state global User y sus metodos o funciones.
  return (
    <UsuarioContext.Provider
      value={{
        usuario,
        setUsuario,
        // signOff,
      }}
    >
      {props.children}
    </UsuarioContext.Provider>
  );
};

export default UsuarioState;
