import React, { useState, useEffect, useContext } from "react";
import CarritoContext from "../../context/Carrito/CarritoContext.js";
import UsuarioContext from "../../context/Usuario/UsuarioContext.js";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { agregarProducto } from "../../utils/peticiones.js";

//funciones (yup package) para validar los datos del formulario
const messageError = "Este campo es obligatorio";
const schema = yup
  .object({
    //cliente
    nombre: yup.string().required(messageError),
    telefono: yup.number().typeError(messageError).required(messageError),
    correo: yup.string().required(messageError),
    direccionDespacho: yup.string().required(messageError),
  })
  .required();

//segundo paso para agregar una venta -- resumen del carrito
function Paso3({ handleClose }) {
  //obtencion de los datos para validar formularios con yup y react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  //useContext del carrito de ventas
  const { usuario } = useContext(UsuarioContext);
  const { carrito, limpiarCarro } = useContext(CarritoContext);
  const [datosCliente, setDatosCliente] = useState({});

  const handleInput = (event) => {
    event.preventDefault();
    setDatosCliente({
      ...datosCliente,
      [event.target.name]: event.target.value,
    });
  };

  const submitVenta = async (data) => {
    // se crea el objeto que se enviará al backend
    const datosSubmit = {
      ...data,
      producto: carrito,
      idUsuario: usuario.id_usuario,
    };

    const post = await agregarProducto(datosSubmit, "venta");
    if (post != "error") {
      handleClose();
      limpiarCarro(carrito);
      console.log(datosSubmit);
      history.push("/admin/registro-ventas");
    }
  };

  return (
    <div>
      <div className="mx-1">Paso 3: Datos Cliente</div>
      <div className="my-2">
        <form onSubmit={handleSubmit(submitVenta)}>
          <div>
            <div className="d-flex w-100 justify-content-between">
              <div className="mb-2 w-100 mx-1">
                <label className="text-sm">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control form-control-sm"
                  placeholder="Nombre del cliente"
                  onChange={handleInput}
                  {...register("nombre")}
                />
                <span className="text-danger text-xs">
                  {errors.nombre?.message}
                </span>
              </div>
              <div className="mb-2 w-100 mx-1">
                <label className="text-sm">Teléfono</label>
                <input
                  type="number"
                  name="telefono"
                  className="form-control form-control-sm"
                  placeholder="9 1234 5678"
                  onChange={handleInput}
                  {...register("telefono")}
                />
                <span className="text-danger text-xs">
                  {errors.telefono?.message}
                </span>
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
                {...register("correo")}
              />
              <span className="text-danger text-xs">
                {errors.correo?.message}
              </span>
            </div>
            <div className="mb-2 mx-1">
              <label className="text-sm">Dirección</label>
              <input
                type="text"
                name="direccionDespacho"
                className="form-control form-control-sm"
                placeholder="Dirección despacho"
                onChange={handleInput}
                {...register("direccionDespacho")}
              />
              <span className="text-danger text-xs">
                {errors.direccionDespacho?.message}
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-end my-2">
            {carrito.id != "" ? (
              <button type="submit" className="btn btn-yellow btn-sm">
                Terminar venta
              </button>
            ) : (
              <div className="btn btn-danger btn-sm">Ingrese un producto</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Paso3;
