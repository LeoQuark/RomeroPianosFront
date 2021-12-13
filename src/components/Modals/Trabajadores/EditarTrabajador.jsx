import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import API_URL from "../../../utils/api-data.js";

const messageError = "Este campo es obligatorio";
const schema = yup
  .object({
    nombre: yup.string().required(messageError),
    telefono: yup
      .number()
      .typeError(messageError + " - 9 dígitos")
      .required(messageError),
    correo: yup.string().email().required(messageError),
    cuentaBancaria: yup.string().required(messageError),
  })
  .required();

function EditarTrabajador({ trabajador }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const history = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const agregarDB = (data) => {
    console.log("agregar a base de datos");
    console.log(data);
    // history.push("/admin/trabajador");
  };

  return (
    <>
      <button className="btn btn-sm btn-yellow" onClick={handleShow}>
        Editar
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="py-0">
          <div className="row d-flex mt-3">
            <h3>Editar datos del trabajador</h3>
            <p className="text-muted text-sm">ID: {trabajador.id_trabajador}</p>
          </div>
        </Modal.Header>
        <Modal.Body className="py-0">
          <div>
            <form onSubmit={handleSubmit(agregarDB)}>
              <div className="d-flex justify-content-between w-100">
                <div className="mb-2 w-100 mx-1">
                  <label className="text-sm">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    defaultValue={trabajador.nombre}
                    {...register("nombre")}
                  />
                  <span className="text-danger text-xs">
                    {errors.nombre?.message}
                  </span>
                </div>
                <div className="mb-2 w-100 mx-1">
                  <label className="text-sm">Teléfono</label>
                  <input
                    name="telefono"
                    type="text"
                    defaultValue={trabajador.telefono}
                    className="form-control"
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
                  type="email"
                  name="correo"
                  className="form-control"
                  {...register("correo")}
                  defaultValue={trabajador.correo}
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
                  {...register("cuentaBancaria")}
                  defaultValue={trabajador.cuenta_bancaria}
                />
                <span className="text-danger text-xs">
                  {errors.cuentaBancaria?.message}
                </span>
              </div>
              <div className="d-flex justify-content-end mx-1 pt-2">
                <button type="submit" className="btn btn-yellow btn-sm">
                  Editar producto
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default EditarTrabajador;
