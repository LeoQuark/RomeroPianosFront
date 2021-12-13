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
    stock: yup.number().typeError(messageError).required(messageError),
  })
  .required();

function EditarProdSerie({ producto }) {
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
  const [datosProducto, setDatosProducto] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput = (event) => {
    event.preventDefault();
    setDatosProducto({
      ...datosProducto,
      [event.target.name]: event.target.value,
    });
  };

  const agregarDB = async (data) => {
    const put = await actualizarPorId(data, "producto", producto.id_prod_serie);
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
            <h3>Editar Producto</h3>
            <p className="text-muted text-sm">ID: {producto.id_prod_serie}</p>
          </div>
        </Modal.Header>
        <Modal.Body className="py-0">
          <form onSubmit={handleSubmit(agregarDB)}>
            <div className="d-flex justify-content-between">
              <div className="mb-2 w-100 mx-1">
                <label className="text-sm">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  defaultValue={producto.nombre}
                  {...register("nombre")}
                  onChange={handleInput}
                />
                <span className="text-danger text-xs">
                  {errors.nombre?.message}
                </span>
              </div>
              <div className="mb-2 w-100 mx-1">
                <label className="text-sm">Stock</label>
                <input
                  name="stock"
                  type="number"
                  className="form-control"
                  defaultValue={producto.stock}
                  {...register("stock")}
                  onChange={handleInput}
                />
                <span className="text-danger text-xs">
                  {errors.stock?.message}
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

export default EditarProdSerie;
