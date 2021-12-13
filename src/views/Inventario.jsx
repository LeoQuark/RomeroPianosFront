import axios from "axios";
import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import API_URL from "../utils/api-data.js";
import { obtenerTodos } from "../utils/peticiones.js";

import Cargando from "../components/Cargando.jsx";
import TablaPianos from "../components/Tablas/TablaPianos.jsx";
import TablaMuebles from "../components/Tablas/TablaMuebles.jsx";
import TablaProdSeries from "../components/Tablas/TablaProdSeries.jsx";

const Inventario = () => {
  //variables y estados
  const location = useLocation();
  const [cargando, setCargando] = useState(true);
  const [verPanel, setVerPanel] = useState("pianos");
  const [pianos, setPianos] = useState(false);
  const [muebles, setMuebles] = useState(false);
  const [prodSerie, setProdSerie] = useState(false);

  //funciones
  const obtenerProductos = async () => {
    const [pianosData, mueblesData, productosData] = await Promise.all([
      obtenerTodos("piano"),
      obtenerTodos("mueble"),
      obtenerTodos("producto"),
    ]);

    setPianos(pianosData);
    setMuebles(mueblesData);
    setProdSerie(productosData);
  };

  function Paneles() {
    if (verPanel === "pianos") {
      return <TablaPianos pianos={pianos} cargando={cargando} />;
    } else if (verPanel === "muebles") {
      return <TablaMuebles muebles={muebles} cargando={cargando} />;
    } else if (verPanel == "series") {
      return <TablaProdSeries prod_serie={prodSerie} cargando={cargando} />;
    }
  }

  useEffect(() => {
    // const obtenerProductos = async () => {
    //   const [pianos, muebles, prod_serie] = await Promise.all([
    //     consultaAxios("piano"),
    //     consultaAxios("mueble"),
    //     consultaAxios("producto"),
    //   ]);
    //   console.log(pianos, muebles, producto);
    //   setDatosPiano(pianos);
    //   setDatosMueble(muebles);
    //   setDatosProducto(prod_serie);

    //   setCargando(false);
    // };
    // obtenerProductos();
    obtenerProductos();
  }, [location]);

  return (
    <div className="container-fluid">
      <div className="d-flex">
        <h5>Selecciona el tipo producto</h5>
      </div>
      <div className="d-flex justify-content-start">
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => setVerPanel("pianos")}
        >
          Pianos
        </button>
        <button
          type="button"
          className="btn btn-dark mx-2 mx-md-4"
          onClick={() => setVerPanel("muebles")}
        >
          Muebles
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => setVerPanel("series")}
        >
          Productos en Serie
        </button>
      </div>
      <div className="row my-2">
        <div className="col">{Paneles()}</div>
      </div>
    </div>
  );
};

export default Inventario;
