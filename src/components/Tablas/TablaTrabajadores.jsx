import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import InfoProducto from "../Modals/InfoProducto.jsx";
import EditarTrabajador from "../Modals/Trabajadores/EditarTrabajador.jsx";
import EliminarProducto from "../Modals/EliminarProducto.jsx";
import Cargando from "../Cargando.jsx";

function TablaTrabajadores({ trabajadores, cargando }) {
  return (
    <Table className="table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Correo</th>
          <th scope="col">Teléfono</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {trabajadores ? (
          trabajadores.map((trabajador, index) => (
            <tr>
              <td className="text-dark" scope="row" key={index}>
                {index + 1}
              </td>
              <td className="text-dark">{trabajador.nombre}</td>
              <td className="text-dark">{trabajador.correo}</td>
              <td className="text-dark">{trabajador.telefono}</td>
              <td className="text-dark">
                <div className="d-flex justify-content-start">
                  <div className="mx-1">
                    <EditarTrabajador trabajador={trabajador} className="" />
                  </div>
                  <div className="mx-1">
                    <EliminarProducto
                      producto={trabajador}
                      tipo="trabajador"
                      nombre={trabajador.nombre}
                    />
                  </div>
                  <div className="mx-1">
                    <InfoProducto producto={trabajador} tipo="trabajador" />
                  </div>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <div>{cargando ? <Cargando /> : "No hay productos"}</div>
        )}
      </tbody>
    </Table>
  );
}

export default TablaTrabajadores;
