import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { obtenerTodos } from "../utils/peticiones.js";

import AgregarTrabajador from "../components/Modals/Trabajadores/AgregarTrabajador.jsx";
import TablaTrabajadores from "../components/Tablas/TablaTrabajadores.jsx";
import Cargando from "../components/Cargando.jsx";

const Trabajadores = () => {
  const location = useLocation();
  const [trabajadores, setTrabajadores] = useState();
  const [cargando, setCargando] = useState(<Cargando />);

  // console.log(trabajadores);
  const obtenerTrabajadores = async () => {
    const getTrabajador = await obtenerTodos("trabajador");
    if (getTrabajador != "error") {
      setTrabajadores(getTrabajador);
    }
  };

  useEffect(() => {
    obtenerTrabajadores();
  }, [location]);

  return (
    <div className="container-fluid">
      <Card className="strpied-tabled-with-hover">
        <Card.Header>
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-sm-8 col-lg-6">
              <Card.Title as="h4">Registro de trabajador</Card.Title>
              <p className="card-category">
                Aquí puedes agregar un nuevo producto, ver la información,
                editar y eliminar tus productos de tu inventario.
              </p>
            </div>
            <div className="col-12 col-sm-3 col-lg-2">
              <AgregarTrabajador />
            </div>
          </div>
        </Card.Header>
        <Card.Body className="table-full-width table-responsive px-0">
          <TablaTrabajadores trabajadores={trabajadores} cargando={cargando} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Trabajadores;
