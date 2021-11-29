import React, { useEffect } from "react";
import { Card, Table } from "react-bootstrap";

import AgregarPiano from "../Modals/Pianos/AgregarPiano.jsx";
import EditarPiano from "../Modals/Pianos/EditarPiano.jsx";
import EliminarProducto from "../Modals/EliminarProducto.jsx";
import InfoProducto from "../Modals/InfoProducto.jsx";

function TablaPianos({ pianos }) {
  useEffect(() => {}, []);

  return (
    <Card className="strpied-tabled-with-hover">
      <Card.Header>
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-sm-8 col-lg-6">
            <Card.Title as="h4">Inventario de Pianos</Card.Title>
            <p className="card-category">
              Aquí puedes acceder a la información, editar y eliminar cada
              producto
            </p>
          </div>
          <div className="col-12 col-sm-3 col-lg-2">
            <AgregarPiano pianos={pianos} />
          </div>
        </div>
      </Card.Header>
      <Card.Body className="table-full-width table-responsive px-0">
        <Table className="table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Tipo</th>
              <th scope="col">Marca</th>
              <th scope="col">Estado</th>
              <th scope="col">Fecha Ingreso</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pianos ? (
              pianos.map((piano, key) => (
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
              <div>no hay productos</div>
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default TablaPianos;
