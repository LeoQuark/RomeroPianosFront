import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import API_URL from "../../../utils/api-data.js";

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

function EditarPiano({ piano }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [show, setShow] = useState(false);
  const [datosPiano, setDatosPiano] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput = (event) => {
    event.preventDefault();
    setDatosPiano({ ...datosPiano, [event.target.name]: event.target.value });
    console.log(datosPiano);
  };

  const agregarDB = (data) => {
    console.log("agregar a base de datos");
    console.log(datosPiano);
    console.log(data);
  };

  return (
    <>
      <button className="btn btn-sm btn-yellow" onClick={handleShow}>
        Editar
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="py-0">
          {/* <Modal.Title></Modal.Title> */}
          <div className="row d-flex mt-3">
            <h3>Editar Piano</h3>
            <p className="text-muted text-sm">ID: {piano.id_piano}</p>
          </div>
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
                    defaultValue={piano.nombre}
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
                    type="text"
                    className="form-control"
                    defaultValue={piano.precio.slice(1, piano.precio.length)}
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
                    defaultValue={piano.tipo}
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
                    defaultValue={piano.marca}
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
                  defaultValue={piano.estado_piano}
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

export default EditarPiano;
