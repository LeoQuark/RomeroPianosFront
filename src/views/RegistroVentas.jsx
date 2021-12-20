import React, { useState, useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import AgregarVenta from "../components/Modals/Ventas/AgregarVenta.jsx";
import TablaVentas from "../components/Tablas/TablaVentas.jsx";
import { obtenerTodos } from "../utils/peticiones.js";

const RegistroVentas = () => {
  const location = useLocation();
  const [cargando, setCargando] = useState(true);
  const [ventas, setVentas] = useState();

  useEffect(async () => {
    const get = await obtenerTodos("venta");
    if (get != "error") {
      setVentas(get);
    }
  }, [location]);

  return (
    <div className="container-fluid">
      <Card className="strpied-tabled-with-hover">
        <Card.Header>
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-sm-8 col-lg-6">
              <Card.Title as="h4">Registro de Ventas</Card.Title>
              <p className="card-category">
                Aquí puedes agregar un nuevo producto, ver la información,
                editar y eliminar tus productos de tu inventario.
              </p>
            </div>
            <div className="col-12 col-sm-3 col-lg-2">
              <AgregarVenta />
            </div>
          </div>
        </Card.Header>
        <Card.Body className="table-full-width table-responsive px-0">
          <TablaVentas ventas={ventas} cargando={cargando} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default RegistroVentas;
