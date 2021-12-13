import React, { useState } from "react";
import { Table } from "react-bootstrap";
import FilasProducto from "./FilasProducto.jsx";

const TablaPianosCarrito = ({ productos, agregarProductos, carrito }) => {
  const includes = (idProducto) => {
    let isDisabled = carrito.productos.some(
      (producto) => producto.id === idProducto
    );
    return isDisabled ? " disabled" : " ";
  };

  return (
    <div>
      <Table className="table-full-width table-responsive px-0">
        <thead>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio Unit</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Seleccion</th>
        </thead>
        <tbody>
          {productos ? (
            productos.map((producto, index) => (
              <FilasProducto
                index={index}
                producto={producto}
                agregarProductos={agregarProductos}
                carrito={carrito}
              />
            ))
          ) : (
            <tr>
              <td>1</td>
              <td>piano 1</td>
              <td>$50000</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaPianosCarrito;
