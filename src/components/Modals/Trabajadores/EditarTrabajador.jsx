import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import API_URL from "../../../utils/api-data.js";

function EditarTrabajador({ piano }) {
  const [show, setShow] = useState(false);
  const [datosPiano, setDatosPiano] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput = (event) => {
    event.preventDefault();
    setDatosPiano({ ...datosPiano, [event.target.name]: event.target.value });
    console.log(datosPiano);
  };

  function agregarDB() {
    console.log("agregar a base de datos");
    console.log(datosPiano);
  }

  return (
    <>
      <button className="btn btn-sm btn-yellow" onClick={handleShow}>
        Editar
      </button>

      <Modal show={show} onHide={handleClose}>
        <form action="" onSubmit={agregarDB}>
          <Modal.Header closeButton className="py-0">
            {/* <Modal.Title></Modal.Title> */}
            <div className="row d-flex mt-3">
              <h3>Editar datos del trabajador</h3>
              <p className="text-muted text-sm">ID: {piano.id_trabajador}</p>
            </div>
          </Modal.Header>
          <Modal.Body className="py-0">
            <div></div>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex w-100 justify-content-between mt-4">
              <button type="submit" className="btn btn-yellow btn-sm">
                Agregar
              </button>
              <button
                className="btn-outline-gray"
                onClick={() => setShow(false)}
              >
                Cerrar
              </button>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default EditarTrabajador;
