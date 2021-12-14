import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { eliminarPorId } from "../../utils/peticiones.js";

function EliminarProducto({ producto, tipo, nombre }) {
  const { handleSubmit } = useForm();
  const history = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const agregarDB = async () => {
    // console.log(tipo, `${producto[`id_${tipo}`]}`);
    const eliminarProducto = await eliminarPorId(
      `${tipo === "prod_serie" ? "producto" : tipo}`,
      `${producto[`id_${tipo}`]}`
    );
    if (eliminarProducto != "error") {
      handleClose();
      if (tipo === "trabajador") {
        history.push("/admin/trabajadores");
      } else {
        history.push("/admin/inventario");
      }
    }
  };

  return (
    <>
      <button className="btn btn-sm btn-danger" onClick={handleShow}>
        Eliminar
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="py-0">
          <div className="row d-flex mt-3">
            <h3>{`Eliminar ${nombre}`}</h3>
            <p className="text-muted text-sm">
              ID: {`${producto[`id_${tipo}`]}`}
            </p>
          </div>
        </Modal.Header>
        <Modal.Body className="py-0 mx-0">
          <form onSubmit={handleSubmit(agregarDB)}>
            <div className="text-md">{`¿Estas seguro(a) de eliminar el ${
              tipo === "prod_serie" ? "producto" : tipo
            } "${nombre}" de tu ${
              tipo != "trabajador" ? "inventario" : "base de datos"
            }?`}</div>
            <div className="d-flex justify-content-end pt-4">
              <button type="submit" className="btn btn-sm btn-danger">
                Sí, eliminar
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default EliminarProducto;
