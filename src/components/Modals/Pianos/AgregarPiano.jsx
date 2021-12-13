import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { agregarProducto } from "../../../utils/peticiones.js";

//funciones (yup package) para validar los datos del formulario
const messageError = "Este campo es obligatorio";
const schema = yup
  .object({
    nombre: yup.string().required(messageError),
    precio: yup.number().typeError(messageError).required(messageError),
    tipo: yup.string().required(messageError),
    marca: yup.string().required(messageError),
    estadoPiano: yup.string().required(messageError),
  })
  .required();

function AgregarPiano() {
  //obtencion de los datos para validar formularios con yup y react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const [show, setShow] = useState(false);
  const [datosPiano, setDatosPiano] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput = (event) => {
    event.preventDefault();
    setDatosPiano({ ...datosPiano, [event.target.name]: event.target.value });
  };

  //agregar el producto a la base de datos
  const agregarDB = async () => {
    const crearPiano = await agregarProducto(datosPiano, "piano");
    if (crearPiano === "error") {
      console.log(crearPiano);
    }
    handleClose();
    history.push("/admin/inventario");
  };

  return (
    <>
      <button className="btn btn-yellow text-sm" onClick={handleShow}>
        Agregar piano
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="py-0 ">
          <Modal.Title>Ingresa los datos del piano</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-0">
          <form onSubmit={handleSubmit(agregarDB)}>
            <div>
              <div className="d-flex justify-content-between">
                <div className="mb-2 w-100 mx-1">
                  <label className="text-sm">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="Nombre del piano"
                    {...register("nombre")}
                    onChange={handleInput}
                  />
                  <span className="text-danger text-xs">
                    {errors.nombre?.message}
                  </span>
                </div>
                <div className="mb-2 w-100 mx-1">
                  <label className="text-sm">Precio</label>
                  <input
                    name="precio"
                    type="number"
                    className="form-control"
                    placeholder="$$$"
                    {...register("precio")}
                    onChange={handleInput}
                  />
                  <span className="text-danger text-xs">
                    {errors.precio?.message}
                  </span>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="mb-2 w-100 mx-1">
                  <label className="text-sm">Tipo</label>
                  <input
                    name="tipo"
                    type="text"
                    className="form-control"
                    placeholder="Tipo de piano"
                    {...register("tipo")}
                    onChange={handleInput}
                  />
                  <span className="text-danger text-xs">
                    {errors.tipo?.message}
                  </span>
                </div>
                <div className="mb-2 w-100 mx-1">
                  <label className="text-sm">Marca</label>
                  <input
                    name="marca"
                    type="text"
                    className="form-control"
                    placeholder="Marca del piano"
                    {...register("marca")}
                    onChange={handleInput}
                  />
                  <span className="text-danger text-xs">
                    {errors.marca?.message}
                  </span>
                </div>
              </div>
              <div className="mb-2">
                <label className="text-sm">Estado</label>
                <select
                  name="estadoPiano"
                  className="form-select form-select-sm"
                  {...register("estadoPiano")}
                  onChange={handleInput}
                >
                  <option value="">-- Seleccione una opción --</option>
                  <option value="bodega">En bodega</option>
                  <option value="reparacion">Reparación</option>
                </select>
                <span className="text-danger text-xs">
                  {errors.estadoPiano?.message}
                </span>
              </div>
            </div>
            <div className="d-flex w-100 justify-content-between mt-4">
              <button type="submit" className="btn btn-yellow btn-sm">
                Agregar
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex w-100 justify-content-end">
            <button className="btn-outline-gray" onClick={handleClose}>
              Cerrar
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AgregarPiano;
