import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { formatearPrecio } from "../../../utils/formatear.js";

import { actualizarPorId } from "../../../utils/peticiones.js";

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

function EditarPiano({ piano }) {
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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const agregarDB = async (data) => {
    const put = await actualizarPorId(data, "piano", piano.id_piano);
    if (put != "error") {
      handleClose();
      history.push("/admin/inventario");
    }
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
                    defaultValue={formatearPrecio(piano.precio)}
                    {...register("precio")}
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
                  defaultValue={piano.estado_piano}
                >
                  <option value="">-- Seleccione una opci??n --</option>
                  <option value="bodega">En bodega</option>
                  <option value="reparacion">Reparaci??n</option>
                </select>
                <span className="text-danger text-xs">
                  {errors.estadoPiano?.message}
                </span>
              </div>
            </div>
            <div className="d-flex w-100 justify-content-end mt-4">
              <button type="submit" className="btn btn-yellow btn-sm">
                Editar producto
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {/* <div className="d-flex w-100 justify-content-end">
            <button className="btn-outline-gray" onClick={handleClose}>
              Cerrar
            </button>
          </div> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditarPiano;
