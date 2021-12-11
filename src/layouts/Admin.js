import React, { useEffect, useContext } from "react";
import { useHistory, useLocation, Route, Switch } from "react-router-dom";
import CarritoState from "../context/Carrito/CarritoState.js";
import UsuarioContext from "../context/Usuario/UsuarioContext.js";
import { getTokenSessionStorage } from "../utils/Storage.js";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
//import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

function Admin() {
  const { usuario } = useContext(UsuarioContext);

  const token = getTokenSessionStorage();
  const history = useHistory();
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  useEffect(() => {
    // HAY QUE VALIDAR EL JWT POR EL BACKEND MEDIANTE EL MIDDLEWAR VALIDATE-JWT PARA SABER SI EL TOKEN DEL USAURIO ES VALIDO O NO (4 HORAS DE FUNCIONAMIENTO)
    //SI ES VALIDO HAY QUE REDIRIGIR AL DASHBOARD

    //aqui hay que validar el token en el backend
    if (!token) {
      history.push(`/auth`);
    }
  }, []);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);
  return (
    <CarritoState>
      <div className="wrapper">
        <Sidebar routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className="content-fluid">
            <Switch>{getRoutes(routes)}</Switch>
          </div>
          <Footer />
        </div>
      </div>
    </CarritoState>
  );
}

export default Admin;
