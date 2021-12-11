import React, { useContext } from "react";
import { useHistory, Route, Redirect } from "react-router-dom";
import UsuarioContext from "../context/Usuario/UsuarioContext.js";
import { getTokenSessionStorage } from "../utils/Storage.js";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { usuario, removerUsuario } = useContext(UsuarioContext);
  const { isLoged } = usuario;
  console.log("isLoged", isLoged);

  React.useEffect(() => {
    const token = getTokenSessionStorage();
    if (!token) {
      removerUsuario();
    }
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoged && restricted ? (
          <Redirect to="/admin" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
