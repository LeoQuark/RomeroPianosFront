//vistas de las secciones
import Dashboard from "./views/Dashboard.jsx";
import RegistroVentas from "./views/RegistroVentas.jsx";
import Inventario from "./views/Inventario.jsx";
import Trabajadores from "./views/Trabajadores.jsx";
import Importaciones from "./views/Importaciones.jsx";
import RegistroGastos from "./views/RegistroGastos.jsx";

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
    icon: "fas fa-shopping-basket",
    component: RegistroVentas,
    layout: "/admin",
  },
  {
    path: "/trabajadores",
    name: "Trabajadores",
    icon: "fas fa-users",
    component: Trabajadores,
    layout: "/admin",
  },
  {
    path: "/importaciones",
    name: "Importaciones",
    icon: "fas fa-calculator",
    component: Importaciones,
    layout: "/admin",
  },
  {
    path: "/registro-gastos",
    name: "Registro de gastos",
    icon: "fas fa-clipboard-list",
    component: RegistroGastos,
    layout: "/admin",
  },
];

export default dashboardRoutes;
