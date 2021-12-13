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
    costoFinal: yup.number().typeError(messageError).required(messageError),
    categoria: yup.string().required(messageError),
    origen: yup.string().required(messageError),
    estadoMueble: yup.string().required(messageError),
  })
  .required();

function AgregarMueble() {
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
  const [datosMueble, setDatosMueble] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput = (event) => {
    event.preventDefault();
    setDatosMueble({ ...datosMueble, [event.target.name]: event.target.value });
    console.log(datosMueble);
  };

  //agregar el producto a la base de datos
  const agregarDB = async () => {
    const crearMueble = await agregarProducto(datosMueble, "mueble");
    if (crearMueble === "error") {
      console.log(crearMueble);
    }
    handleClose();
    history.push("/admin/inventario");
  };

  return (
    <>
      <button className="btn btn-yellow text-sm" onClick={handleShow}>
        Agregar mueble
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="py-0">
          <Modal.Title>Ingresa los datos del Mueble</Modal.Title>
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
                    placeholder="Nombre del mueble"
                    {...register("nombre")}
                    onChange={handleInput}
                  />
                  <span className="text-danger text-xs">
                    {errors.nombre?.message}
                  </span>
                </div>
                <div className="mb-2 w-100 mx-1">
                  <label className="text-sm">Costo Final</label>
                  <input
                    name="costoFinal"
                    type="number"
                    className="form-control"
                    placeholder="$$$"
                    {...register("costoFinal")}
                    onChange={handleInput}
                  />
                  <span className="text-danger text-xs">
                    {errors.costoFinal?.message}
                  </span>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="mb-2 w-100 mx-1">
                  <label className="text-sm">Categoria</label>
                  <input
                    name="categoria"
                    type="text"
                    className="form-control"
                    placeholder="Categoria"
                    {...register("categoria")}
                    onChange={handleInput}
                  />
                  <span className="text-danger text-xs">
                    {errors.categoria?.message}
                  </span>
                </div>
                <div className="mb-2 w-100 mx-1">
                  <label className="text-sm">Origen</label>
                  <input
                    name="origen"
                    type="text"
                    className="form-control"
                    placeholder="Origen del piano"
                    {...register("origen")}
                    onChange={handleInput}
                  />
                  <span className="text-danger text-xs">
                    {errors.origen?.message}
                  </span>
                </div>
              </div>
              <div className="mb-2">
                <label className="text-sm">Estado</label>
                <select
                  name="estadoMueble"
                  className="form-select form-select-sm"
                  {...register("estadoMueble")}
                  onChange={handleInput}
                >
                  <option value="">-- Seleccione una opción --</option>
                  <option value="bodega">En bodega</option>
                  <option value="reparacion">Reparación</option>
                </select>
                <span className="text-danger text-xs">
                  {errors.estadoMueble?.message}
                </span>
              </div>
            </div>
            <div className="d-flex w-100 justify-content-end mt-4">
              <button type="submit" className="btn btn-yellow btn-sm">
                Agregar
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default AgregarMueble;
