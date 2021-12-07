import React, { useEffect, useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import UsuarioContext from "../context/Usuario/UsuarioContext.js";
import { getTokenSessionStorage } from "../utils/Storage.js";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { usuario } = useContext(UsuarioContext);
  const { isLoged } = usuario;

  useEffect(() => {}, []);

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
