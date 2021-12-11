import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";

function AgregarTrabajador() {
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
      <button className="btn btn-yellow text-sm" onClick={handleShow}>
        Agregar Trabajador
      </button>

      <Modal show={show} onHide={handleClose}>
        <form action="" onSubmit={agregarDB}>
          <Modal.Header closeButton className="py-0">
            <Modal.Title>Ingresa sus datos</Modal.Title>
          </Modal.Header>
          <Modal.Body className="py-0">
            <div>
              <div className="d-flex justify-content-between w-100">
                <div className="mb-2 w-100 mx-1">
                  <label className="text-sm">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="Nombre y apellido"
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-2 w-100 mx-1">
                  <label className="text-sm">Teléfono</label>
                  <input
                    name="telefono"
                    type="number"
                    className="form-control"
                    placeholder="9 1234 5678"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="mb-2 mx-1">
                <label className="text-sm">Correo</label>
                <input
                  type="email"
                  name="correo"
                  className="form-control"
                  placeholder="ejemplo@gmail.com"
                  onChange={handleInput}
                />
              </div>
              <div className="mb-2 mx-1">
                <label className="text-sm">Cuenta bancaria</label>
                <textarea
                  name="cuentaBancaria"
                  type="text"
                  rows="2"
                  className="form-control h-100"
                  placeholder="Datos de la cuenta bancaria"
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="d-flex w-100 justify-content-between mt-4">
              <button type="submit" className="btn btn-yellow btn-sm">
                Agregar
              </button>
            </div>
          </Modal.Body>
        </form>
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

export default AgregarTrabajador;
