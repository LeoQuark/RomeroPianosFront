import React, { useState, useEffect, useContext } from "react";
import CarritoContext from "../../context/Carrito/CarritoContext.js";
import { getVentasLocalStorage } from "../../utils/Storage.js";

//segundo paso para agregar una venta -- resumen del carrito
function Paso2() {
  //useContext del carrito de ventas
  const { carrito, eliminarProducto } = useContext(CarritoContext);

  //funcion para eliminar un producto del carrito -- ocupando un reducer
  const clickEliminar = (event, producto) => {
    event.preventDefault();
    eliminarProducto(producto);
  };

  useEffect(() => {
    //se obtienen los datos del local storage (venta)
    // setCarrito(getVentasLocalStorage());
  }, []);

  return (
    <div>
      <div>Paso 2: Resumen</div>
      <div>
        <table className="table table-sm table-hover overflow-scroll">
          <thead>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Tipo</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </thead>
          <tbody>
            {carrito.productos ? (
              carrito.productos.map(
                (producto, key) =>
                  key != 0 && (
                    <tr>
                      <td className="text-dark" scope="row">
                        {key}
                      </td>
                      <td className="text-dark text-capitalize">
                        {producto.nombre}
                      </td>
                      <td className="text-dark text-capitalize">
                        {producto.tipo}
                      </td>
                      <td className="text-dark">{producto.precio}</td>
                      <td className="text-dark text-capitalize">
                        {producto.cantidad}
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-secondary"
                          onClick={(event) => clickEliminar(event, producto)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  )
              )
            ) : (
              <div>{"No hay productos"}</div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Paso2;
