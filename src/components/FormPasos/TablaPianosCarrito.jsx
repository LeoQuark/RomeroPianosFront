import React, { useState } from "react";

const TablaPianosCarrito = ({ pianos, agregarProductos, carrito }) => {
  const includes = (idProducto) => {
    let isDisabled = carrito.productos.some(
      (producto) => producto.id === idProducto
    );
    return isDisabled ? " disabled" : " ";
  };

  return (
    <div>
      <table className="table table-sm table-hover overflow-scroll">
        <thead>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Tipo</th>
          <th scope="col">Marca</th>
          <th scope="col">Precio</th>
          <th scope="col">Seleccion</th>
        </thead>
        <tbody>
          {pianos ? (
            pianos.map((piano, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{piano.nombre}</td>
                <td>{piano.tipo}</td>
                <td>{piano.marca}</td>
                <td>{piano.precio}</td>
                <td>
                  <button
                    className={
                      "btn btn-sm btn-yellow " + includes(piano.id_piano)
                    }
                    onClick={(event) => agregarProductos(event, piano, "piano")}
                  >
                    Agregar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>1</td>
              <td>piano 1</td>
              <td>$50000</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TablaPianosCarrito;
