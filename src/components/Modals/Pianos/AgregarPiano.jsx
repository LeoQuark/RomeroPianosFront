import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import API_URL from "../../../utils/api-data.js";

function AgregarPiano() {
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
        Agregar piano
      </button>

      <Modal show={show} onHide={handleClose}>
        <form action="" onSubmit={agregarDB}>
          <Modal.Header closeButton className="py-0 ">
            <Modal.Title>Ingresa los datos del piano</Modal.Title>
          </Modal.Header>
          <Modal.Body className="py-0">
            <div>
              <div className="d-flex justify-content-between">
                <div className="mb-2 w-100 mx-1">
                  <label htmlFor="">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="Nombre del piano"
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-2 w-100 mx-1">
                  <label htmlFor="">Precio</label>
                  <input
                    name="precio"
                    type="number"
                    className="form-control"
                    placeholder="$$$"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="mb-2 w-100 mx-1">
                  <label htmlFor="">Tipo</label>
                  <input
                    name="tipo"
                    type="text"
                    className="form-control"
                    placeholder="Tipo de piano"
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-2 w-100 mx-1">
                  <label htmlFor="">Marca</label>
                  <input
                    name="marca"
                    type="text"
                    className="form-control"
                    placeholder="Marca del piano"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="">Estado</label>
                {/* <input
                  name="estado_piano"
                  type="text"
                  className="form-control"
                  onChange={handleInput}
                /> */}
                <select
                  name="estado_piano"
                  id=""
                  className="form-select form-select-sm"
                  onChange={handleInput}
                >
                  <option value="bodega">En bodega</option>
                  <option value="reparacion">Reparación</option>
                </select>
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

export default AgregarPiano;
