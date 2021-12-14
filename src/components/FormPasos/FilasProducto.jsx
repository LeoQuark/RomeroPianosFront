import React, { useState } from "react";

const FilasProducto = ({ index, producto, agregarProductos, carrito }) => {
  const [cantidad, setCantidad] = useState(1);
  const includes = (idProducto) => {
    let isDisabled = idProducto === carrito.id ? "disabled" : " ";
    return isDisabled;
  };

  const menos = (event) => {
    event.preventDefault();
    if (cantidad === 1) {
      setCantidad(1);
    } else {
      setCantidad(cantidad - 1);
    }
  };

  const mas = (event) => {
    event.preventDefault();
    if (cantidad < producto.stock) {
      setCantidad(cantidad + 1);
    }
  };

  const Cantidad = () => {
    return (
      <div className="d-flex w-100 justify-content-between">
        <div onClick={menos}>
          <i class="fas fa-minus"></i>
        </div>
        <div className="">{cantidad}</div>
        <div onClick={mas}>
          <i class="fas fa-plus"></i>
        </div>
      </div>
    );
  };

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{producto.nombre}</td>
      <td>{producto.stock}</td>
      <td>{producto.precio}</td>
      <td className="">{Cantidad()}</td>
      <td>
        <button
          className={
            "btn btn-sm btn-yellow " + includes(producto.id_prod_serie)
          }
          onClick={(event) =>
            agregarProductos(event, producto, "prod_serie", cantidad)
          }
        >
          Agregar
        </button>
      </td>
    </tr>
  );
};

export default FilasProducto;
