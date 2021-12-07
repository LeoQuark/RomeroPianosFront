import axios from "axios";
import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import API_URL from "../utils/api-data.js";

import TablaVentas from "../components/Tablas/TablaVentas.jsx";
import TablaVentasProdSeries from "../components/Tablas/TablaVentasProdSeries.jsx";

const RegistroVentas = () => {
  //variables y estados
  const [cargando, setCargando] = useState(true);
  const [verPanel, setVerPanel] = useState("ventas");
  const [ventas, setVentas] = useState(false);
  const [ventasProdSeries, setVentasProdSeries] = useState(false);

  //funciones
  function Paneles() {
    if (verPanel === "ventas") {
      return <TablaVentas />;
    } else if (verPanel === "ventas-prod-serie") {
      return <TablaVentasProdSeries />;
    }
  }

  useEffect(() => {
    // obtenerProductos();
  }, []);

  return (
    <div className="container-fluid">
      <div className="d-flex">
        <h5>Selecciona el tipo de venta</h5>
      </div>
      <div className="d-flex justify-content-start">
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => setVerPanel("ventas")}
        >
          Ventas (Muebles y Pianos)
        </button>
        <button
          type="button"
          className="btn btn-dark mx-2 mx-md-4"
          onClick={() => setVerPanel("ventas-prod-serie")}
        >
          Ventas de producto en serie
        </button>
      </div>
      <div className="row my-2">
        <div className="col">{Paneles()}</div>
      </div>
    </div>
  );
};

export default RegistroVentas;
