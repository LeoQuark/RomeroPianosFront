import React, { useState } from "react";
import { Card, Table } from "react-bootstrap";
import Cargando from "../Cargando.jsx";

function TablaImportaciones({ importaciones, cargando }) {
  const [paginacion, setPaginacion] = useState(0);

  //funciones para la paginacion
  const siguiente = () => {
    setPaginacion(paginacion + 10);
  };

  const atras = () => {
    if (paginacion > 0) setPaginacion(paginacion - 10);
  };

  //funcion para enumerar correctamente las filas de la tabla
  const numConsecutivos = (num) => {
    if (paginacion === 0) return num;
    else return paginacion + num;
  };

  return (
    <Card className="strpied-tabled-with-hover">
      <Card.Body className="table-full-width table-responsive px-0">
        <Table className="table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">$ Importación</th>
              <th scope="col">$ Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Dolar</th>
              <th scope="col">Piso</th>
            </tr>
          </thead>
          <tbody>
            {importaciones ? (
              importaciones.map((importacion, index) => (
                <tr>
                  <td className="text-dark" scope="row">
                    {numConsecutivos(index + 1)}
                  </td>
                  <td className="text-dark">{importacion.valor_importacion}</td>
                  <td className="text-dark">{importacion.precio_producto}</td>
                  <td className="text-dark">{importacion.cantidad_producto}</td>
                  <td className="text-dark">{importacion.valor_dolar}</td>
                  <td className="text-dark">{importacion.piso}</td>
                </tr>
              ))
            ) : (
              <tr style={{ borderBottom: "1px solid white" }}>
                {!importaciones ? <td>No hay productos</td> : <Cargando />}
              </tr>
            )}
          </tbody>
        </Table>
        <div className="container-fluid">
          <div className="d-flex justify-content-center w-100">
            <button className="btn btn-sm btn-dark mx-2" onClick={atras}>
              Anterior
            </button>
            <button className="btn btn-sm btn-dark mx-2" onClick={siguiente}>
              Siguiente
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TablaImportaciones;
