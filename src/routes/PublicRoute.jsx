import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UsuarioContext from "../context/Usuario/UsuarioContext.js";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { usuario } = useContext(UsuarioContext);
  const { isLoged } = usuario;
  // console.log(isLoged, restricted);

  React.useEffect(() => {
    // if (isLoged) restricted = true;
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        restricted ? <Redirect to="/admin" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
