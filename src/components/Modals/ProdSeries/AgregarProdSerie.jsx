import React, { useState } from "react";
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
    stock: yup.number().typeError(messageError).required(messageError),
  })
  .required();

function AgregarProdSerie() {
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
    console.log(datosProducto);
  };

  //agregar el producto a la base de datos
  const agregarDB = async () => {
    const crearProducto = await agregarProducto(datosProducto, "producto");
    if (crearProducto === "error") {
      console.log(crearProducto);
    }
    handleClose();
    history.push("/admin/inventario");
  };

  return (
    <>
      <button className="btn btn-yellow text-sm" onClick={handleShow}>
        Agregar Producto
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="py-0">
          <Modal.Title>Ingresa los datos de los Productos</Modal.Title>
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
                    placeholder="Nombre del producto"
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
                    placeholder="Stock del producto"
                    {...register("stock")}
                    onChange={handleInput}
                  />
                  <span className="text-danger text-xs">
                    {errors.stock?.message}
                  </span>
                </div>
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
          {/* <div className="d-flex w-100 justify-content-end">
            <button className="btn-outline-gray" onClick={() => setShow(false)}>
              Cerrar
            </button>
          </div> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AgregarProdSerie;
