import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";

import AgregarPiano from "../Modals/Pianos/AgregarPiano.jsx";
import EditarPiano from "../Modals/Pianos/EditarPiano.jsx";
import EliminarProducto from "../Modals/EliminarProducto.jsx";
import InfoProducto from "../Modals/InfoProducto.jsx";
import Cargando from "../Cargando.jsx";

function TablaVentasProdSeries() {
  // const [cargando, setCargando] = useState(<Cargando />);
  useEffect(() => {}, []);

  return (
    <Card className="strpied-tabled-with-hover">
      <Card.Header>
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-sm-8 col-lg-6">
            <Card.Title as="h4">Ventas de Productos en Serie</Card.Title>
            <p className="card-category">
              Aquí pueder agregar y ver la información de las ventas realizadas.
            </p>
          </div>
          <div className="col-12 col-sm-3 col-lg-2">
            {/* <AgregarPiano /> */}
          </div>
        </div>
      </Card.Header>
      <Card.Body className="table-full-width table-responsive px-0">
        <Table className="table-hover">
          {/* <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Cliente</th>
              <th scope="col">Usuario</th>
              <th scope="col">Precio</th>
              <th scope="col">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {ventas ? (
              ventas.map((piano, key) => (
                <tr>
                  <td className="text-dark" scope="row">
                    {key + 1}
                  </td>
                  <td className="text-dark">{piano.nombre}</td>
                  <td className="text-dark">{piano.precio}</td>
                  <td className="text-dark">{piano.tipo}</td>
                  <td className="text-dark">{piano.marca}</td>
                  <td className="text-dark">{piano.estado_piano}</td>
                  <td className="text-dark">{piano.fecha}</td>
                  <td className="text-dark">
                    <div className="d-flex justify-content-start justify-content-lg-between">
                      <EditarPiano piano={piano} />
                      <EliminarProducto
                        producto={piano}
                        tipo="piano"
                        nombre={piano.nombre}
                      />
                      <InfoProducto producto={piano} tipo="piano" />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <div>{cargando ? <Cargando /> : "No hay productos"}</div>
            )}
          </tbody> */}
        </Table>
      </Card.Body>
    </Card>
  );
}

export default TablaVentasProdSeries;