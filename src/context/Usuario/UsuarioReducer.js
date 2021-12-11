// import { SET_USER } from "./types";
/*
    Creación de las acciones que podrá realizar el estado global User
    Las acciones estan declaradas como string en 'types.js' 
*/
export default (state, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        isLoged: action.payload.isLoged,
        id_usuario: action.payload.id_usuario,
        nombre: action.payload.nombre,
        correo: action.payload.correo,
      };
    case "SIGN_OFF":
      return {
        isLoged: false,
        id_usuario: "",
        nombre: "",
        correo: "",
      };
    default:
      return state;
  }
};
