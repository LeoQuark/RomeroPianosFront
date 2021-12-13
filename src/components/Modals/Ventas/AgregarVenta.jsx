import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { obtenerTodos } from "../../../utils/peticiones.js";

import Paso1 from "../../FormPasos/Paso1.jsx";
import Paso2 from "../../FormPasos/Paso2.jsx";
import Paso3 from "../../FormPasos/Paso3.jsx";

function AgregarVenta() {
  const [show, setShow] = useState(false);
  const [datosPiano, setDatosPiano] = useState({});
  const [datosMueble, setDatosMueble] = useState({});
  const [datosProducto, setDatosProducto] = useState({});
  const [paso, setPaso] = useState(1);
  const [count, setCount] = useState(1);

  const handleClose = () => {
    setPaso(0);
    setShow(false);
  };
  const handleShow = () => {
    setPaso(1);
    setShow(true);
  };

  const handleCount = (event) => {
    event.preventDefault();
    if (count === 1) {
      setCount(2);
      setPaso(2);
    } else if (count === 2) {
      setCount(3);
      setPaso(3);
    } else if (count === 3) {
      setCount(1);
      setPaso(1);
    }
  };
  const handleInput = (event) => {
    event.preventDefault();
    setDatosPiano({ ...datosPiano, [event.target.name]: event.target.value });
  };

  useEffect(async () => {
    const [pianos, muebles, prod_serie] = await Promise.all([
      obtenerTodos("piano"),
      obtenerTodos("mueble"),
      obtenerTodos("producto"),
    ]);
    setDatosPiano(pianos);
    setDatosMueble(muebles);
    setDatosProducto(prod_serie);
  }, []);

  function FormularioPasos() {
    if (paso === 1)
      return (
        <Paso1
          pianos={datosPiano}
          muebles={datosMueble}
          productos={datosProducto}
        />
      );
    else if (paso === 2) return <Paso2 />;
    else if (paso === 3) return <Paso3 />;
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
            {paso === 2 ? (
              <button
                className="btn btn-dark btn-sm"
                style={{ marginRight: "6px" }}
                onClick={(event) => {
                  event.preventDefault();
                  setCount(1);
                  setPaso(1);
                }}
              >
                Atrás
              </button>
            ) : (
              paso === 3 && (
                <button
                  className="btn btn-dark btn-sm"
                  style={{ marginRight: "6px" }}
                  onClick={(event) => {
                    event.preventDefault();
                    setCount(2);
                    setPaso(2);
                  }}
                >
                  Atrás
                </button>
              )
            )}
            {paso != 3 && (
              <button
                className="btn btn-yellow btn-sm"
                onClick={(event) => handleCount(event)}
              >
                Siguiente
              </button>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default AgregarVenta;
