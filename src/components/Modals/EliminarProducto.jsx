import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import API_URL from "../../utils/api-data.js";

function EliminarProducto({ producto, tipo, nombre }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function agregarDB() {
    console.log("Eliminar producto de la base de datos");
  }

  return (
    <>
      <button className="btn btn-sm btn-danger" onClick={handleShow}>
        Eliminar
      </button>

      <Modal show={show} onHide={handleClose}>
        <form action="" onSubmit={agregarDB}>
          <Modal.Header closeButton className="py-0">
            {/* <Modal.Title></Modal.Title> */}
            <div className="row d-flex mt-3">
              <h3>{`Eliminar ${tipo}`}</h3>
              <p className="text-muted text-sm">
                ID: {`${producto[`id_${tipo}`]}`}
              </p>
            </div>
          </Modal.Header>
          <Modal.Body className="py-0 mx-0">
            <div className="text-md">{`¿Estas seguro(a) de eliminar el ${tipo} "${nombre}" de tu ${
              tipo != "trabajador" ? "inventario" : "base de datos"
            }?`}</div>
            <div className="d-flex justify-content-start pt-4">
              <button type="submit" className="btn btn-sm btn-danger">
                Sí, eliminar
              </button>
            </div>
          </Modal.Body>
        </form>
        <Modal.Footer>
          <div className="d-flex w-100 justify-content-end">
            <button className="btn-outline-gray" onClick={() => setShow(false)}>
              Cerrar
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EliminarProducto;
