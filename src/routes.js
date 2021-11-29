import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Inventario from "views/Inventario.jsx";
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
    path: "/table",
    name: "Registro de ventas",
    icon: "fas fa-clipboard-list",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Cálculo de costos",
    icon: "fas fa-calculator",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
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
