import React, { useState, useEffect } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import API_URL from "../../../utils/api-data.js";

import Paso1 from "../../FormPasos/Paso1.jsx";
import Paso2 from "../../FormPasos/Paso2.jsx";

function AgregarVenta() {
  const [show, setShow] = useState(false);
  const [datosPiano, setDatosPiano] = useState({});
  const [paso, setPaso] = useState(0);

  const handleClose = () => {
    setPaso(0);
    setShow(false);
  };
  const handleShow = () => {
    setPaso(1);
    setShow(true);
  };

  const handleInput = (event) => {
    event.preventDefault();
    setDatosPiano({ ...datosPiano, [event.target.name]: event.target.value });
    console.log(datosPiano);
  };

  function agregarDB() {
    console.log("agregar a base de datos");
    console.log(datosPiano);
  }

  function FormularioPasos() {
    if (paso === 1) {
      return <Paso1 />;
    } else if (paso === 2) {
      return <Paso2 />;
    }
  }

  return (
    <>
      <button className="btn btn-yellow text-sm" onClick={handleShow}>
        Agregar Venta
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="py-0">
          <Modal.Title>Agrega una venta</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-0 ">
          {/* overflow-scroll */}
          <div>{FormularioPasos()}</div>
          <div className="d-flex w-100">
            {paso === 2 && (
              <button
                className="btn btn-dark btn-sm"
                style={{ marginRight: "6px" }}
                onClick={() => setPaso(1)}
              >
                Atrás
              </button>
            )}
            <button
              className="btn btn-yellow btn-sm"
              onClick={() => setPaso(2)}
            >
              Siguiente
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex w-100 justify-content-end mt-4">
            <button className="btn-outline-gray" onClick={handleClose}>
              Cerrar
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AgregarVenta;
