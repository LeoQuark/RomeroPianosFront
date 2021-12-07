// import { SET_USER } from "./types";
/*
    Creación de las acciones que podrá realizar el estado global User
    Las acciones estan declaradas como string en 'types.js' 
*/
export default (state, action) => {
  const { payload, type } = action;
  const { isLoged, id_usuario, nombre, correo } = payload;
  console.log("payload", payload);
  switch (type) {
    case "SET_LOGIN":
      return {
        isLoged,
        id_usuario,
        nombre,
        correo,
      };
    // case "SIGN_OFF":
    //   return {
    //     isLoged: false,
    //     id_usuario: "",
    //     nombre: "",
    //     correo: "",
    //   };
    default:
      return state;
  }
};
