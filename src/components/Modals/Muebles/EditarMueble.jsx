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
    costoFinal: yup.number().typeError(messageError).required(messageError),
    categoria: yup.string().required(messageError),
    origen: yup.string().required(messageError),
    estadoMueble: yup.string().required(messageError),
  })
  .required();

function EditarMueble({ mueble }) {
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
    const put = await actualizarPorId(data, "mueble", mueble.id_mueble);
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
            <p className="text-muted text-sm">ID: {mueble.id_mueble}</p>
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
                    defaultValue={mueble.nombre}
                    {...register("nombre")}
                  />
                  <span className="text-danger text-xs">
                    {errors.nombre?.message}
                  </span>
                </div>
                <div className="mb-2 w-100 mx-1">
                  <label className="text-sm">Costo Final</label>
                  <input
                    name="costoFinal"
                    type="text"
                    className="form-control"
                    defaultValue={formatearPrecio(mueble.costo_final)}
                    {...register("costoFinal")}
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
                    defaultValue={mueble.categoria}
                    {...register("categoria")}
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
                    defaultValue={mueble.origen}
                    {...register("origen")}
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
                  defaultValue={mueble.estado_mueble}
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
                Editar producto
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default EditarMueble;
