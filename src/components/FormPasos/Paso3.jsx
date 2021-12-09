import React, { useState, useEffect, useContext } from "react";
import CarritoContext from "../../context/Carrito/CarritoContext.js";
import UsuarioContext from "../../context/Usuario/UsuarioContext.js";
import { getVentasLocalStorage } from "../../utils/Storage.js";
import axios from "axios";

//segundo paso para agregar una venta -- resumen del carrito
function Paso3() {
  //useContext del carrito de ventas
  const { usuario } = useContext(UsuarioContext);
  const { carrito, eliminarProducto } = useContext(CarritoContext);
  const [datosCliente, setDatosCliente] = useState({});

  const handleInput = (event) => {
    event.preventDefault();
    setDatosCliente({
      ...datosCliente,
      [event.target.name]: event.target.value,
    });
  };

  const obtenerPrecioTotal = () => {
    let precioTotal;

    // console.log("carrito", carrito);
    carrito.productos.map((producto) => {
      //   console.log("prod", producto);
      precioTotal = precioTotal + producto.precio;
    });
    console.log(precioTotal);
    return precioTotal;
  };

  const submitVenta = (event) => {
    event.preventDefault();
    const eliminarPrimerDato = carrito.productos.shift();
    const precioTotal = obtenerPrecioTotal();
    console.log(precioTotal);
    const datosSubmit = {
      ...datosCliente,
      ...carrito,
      idUsuario: usuario.id_usuario,
    };
    // console.log("usuario id", usuario);
    console.log(datosSubmit);
  };

  return (
    <div>
      <div>Paso 3: Datos del cliente</div>
      <div className="my-2">
        <form onSubmit={submitVenta}>
          <div className="d-flex w-100 justify-content-between">
            <div className="mb-2 w-100 mx-1">
              <label className="text-sm">Nombre</label>
              <input
                type="text"
                name="nombre"
                className="form-control form-control-sm"
                placeholder="Nombre del cliente"
                onChange={handleInput}
              />
            </div>
            <div className="mb-2 w-100 mx-1">
              <label className="text-sm">Teléfono</label>
              <input
                type="number"
                name="telefono"
                className="form-control form-control-sm"
                placeholder="9 1234 5678"
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="mb-2 mx-1">
            <label className="text-sm">Correo</label>
            <input
              type="text"
              name="correo"
              className="form-control form-control-sm"
              placeholder="cliente@gmail.com"
              onChange={handleInput}
            />
          </div>
          <div className="mb-2 mx-1">
            <label className="text-sm">Dirección</label>
            <input
              type="text"
              name="direccionPersonal"
              className="form-control form-control-sm"
              placeholder="Dirección personal"
              onChange={handleInput}
            />
          </div>
          <div className="d-flex justify-content-end my-2">
            <button type="submit" className="btn btn-yellow btn-sm">
              Terminar venta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Paso3;
