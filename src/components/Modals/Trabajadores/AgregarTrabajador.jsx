import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { agregarProducto } from "../../../utils/peticiones.js";

//funciones (yup package) para validar los datos del formulario
const messageError = "Este campo es obligatorio";
const schema = yup
  .object({
    nombre: yup.string().required(messageError),
    telefono: yup.number().typeError(messageError).required(messageError),
    correo: yup.string().required(messageError),
    cuentaBancaria: yup.string().required(messageError),
  })
  .required();

function AgregarTrabajador() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const [show, setShow] = useState(false);
  const [datosTrabajador, setDatosTrabajador] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput = (event) => {
    event.preventDefault();
    setDatosTrabajador({
      ...datosTrabajador,
      [event.target.name]: event.target.value,
    });
  };

  function agregarDB() {
    const add = agregarProducto(datosTrabajador, "trabajador");
    if (add != "error") {
      handleClose();
      history.push("/admin/trabajadores");
    }
  }

  return (
    <>
      <button className="btn btn-yellow text-sm" onClick={handleShow}>
        Agregar Trabajador
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="py-0">
          <Modal.Title>Ingresa sus datos</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-0">
          <form action="" onSubmit={handleSubmit(agregarDB)}>
            <div>
              <div className="d-flex justify-content-between w-100">
                <div className="mb-2 w-100 mx-1">
                  <label className="text-sm">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="Nombre y apellido"
                    {...register("nombre")}
                    onChange={handleInput}
                  />
                  <span className="text-danger text-xs">
                    {errors.nombre?.message}
                  </span>
                </div>
                <div className="mb-2 w-100 mx-1">
                  <label className="text-sm">Teléfono</label>
                  <input
                    name="telefono"
                    type="number"
                    className="form-control"
                    placeholder="9 1234 5678"
                    {...register("telefono")}
                    onChange={handleInput}
                  />
                  <span className="text-danger text-xs">
                    {errors.telefono?.message}
                  </span>
                </div>
              </div>
              <div className="mb-2 mx-1">
                <label className="text-sm">Correo</label>
                <input
                  type="email"
                  name="correo"
                  className="form-control"
                  placeholder="ejemplo@gmail.com"
                  {...register("correo")}
                  onChange={handleInput}
                />
                <span className="text-danger text-xs">
                  {errors.correo?.message}
                </span>
              </div>
              <div className="mb-2 mx-1">
                <label className="text-sm">Cuenta bancaria</label>
                <textarea
                  name="cuentaBancaria"
                  type="text"
                  rows="2"
                  className="form-control h-100"
                  placeholder="Datos de la cuenta bancaria"
                  {...register("cuentaBancaria")}
                  onChange={handleInput}
                />
                <span className="text-danger text-xs">
                  {errors.cuentaBancaria?.message}
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

export default AgregarTrabajador;
