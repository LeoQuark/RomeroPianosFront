import React, { useState, useEffect, useRef } from "react";

const TablaMueblesCarrito = ({ muebles, agregarProductos, carrito }) => {
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
          <th scope="col">Categoria</th>
          <th scope="col">Origen</th>
          <th scope="col">Precio</th>
          <th scope="col">Seleccion</th>
        </thead>
        <tbody>
          {muebles ? (
            muebles.map((mueble, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{mueble.nombre}</td>
                <td>{mueble.categoria}</td>
                <td>{mueble.origen}</td>
                <td>{mueble.precio}</td>
                <td>
                  <button
                    className={
                      "btn btn-sm btn-yellow " + includes(mueble.id_mueble)
                    }
                    onClick={(event) =>
                      agregarProductos(event, mueble, "mueble", 1)
                    }
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

export default TablaMueblesCarrito;
