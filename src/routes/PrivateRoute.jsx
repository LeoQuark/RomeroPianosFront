import React, { useEffect, useContext } from "react";
import { useLocation, useHistory, Route, Redirect } from "react-router-dom";

import UsuarioContext from "../context/Usuario/UsuarioContext.js";
import {
  getTokenSessionStorage,
  getUsuarioSessionStorage,
} from "../utils/Storage.js";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { usuario, setUsuario } = useContext(UsuarioContext);
  const { isLoged } = usuario;
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const token = getTokenSessionStorage();

    if (!token) {
      history.push("/auth");
    }

    if (token) {
      const { nombre, correo, id_usuario } = getUsuarioSessionStorage();
      setUsuario({
        isLoged: true,
        nombre,
        correo,
        id_usuario,
      });
      history.push("/admin/dashboard");
    }
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoged ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
