import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "./assets/css/estilos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import UsuarioState from "./context/Usuario/UsuarioState.js";

//importacion de los 2 tipos de rutas
import PublicRoute from "./routes/PublicRoute.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Auth from "./layouts/Auth.js";
import Admin from "layouts/Admin.js";

ReactDOM.render(
  <UsuarioState>
    <BrowserRouter>
      <Switch>
        <PublicRoute component={Auth} path="/auth" exact />
        <PrivateRoute component={Admin} path="/admin" />
        <Redirect from="/" to="/auth" />
      </Switch>
    </BrowserRouter>
  </UsuarioState>,
  document.getElementById("root")
);
