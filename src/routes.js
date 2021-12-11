import Dashboard from "views/Dashboard.js";
import RegistroVentas from "views/RegistroVentas.jsx";
import Inventario from "views/Inventario.jsx";
import Trabajadores from "./views/Trabajadores.jsx";

import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fas fa-chart-pie",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/inventario",
    name: "Inventario",
    icon: "fas fa-box-open",
    component: Inventario,
    layout: "/admin",
  },
  {
    path: "/registro-ventas",
    name: "Registro de ventas",
    icon: "fas fa-clipboard-list",
    component: RegistroVentas,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "fas fa-calculator",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/trabajadores",
    name: "Trabajadores",
    icon: "fas fa-users",
    component: Trabajadores,
    layout: "/admin",
  },
  /*
  {
    path: "/maps",
    name: "Mapa",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
  },

  {
    path: "/notifications",
    name: "Notificaciones",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  */
];

export default dashboardRoutes;
