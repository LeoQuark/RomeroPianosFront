import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import API_URL from "../../../utils/api-data.js";

function AgregarMueble() {
  const [show, setShow] = useState(false);
  const [datosMueble, setDatosMueble] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput = (event) => {
    event.preventDefault();
    setDatosMueble({ ...datosMueble, [event.target.name]: event.target.value });
    console.log(datosMueble);
  };

  function agregarDB() {
    console.log("agregar a base de datos");
    console.log(datosMueble);
  }

  return (
    <>
      <button className="btn btn-yellow text-sm" onClick={handleShow}>
        Agregar mueble
      </button>

      <Modal show={show} onHide={handleClose}>
        <form action="" onSubmit={agregarDB}>
          <Modal.Header closeButton className="py-0">
            <Modal.Title>Agrega un mueble</Modal.Title>
          </Modal.Header>
          <Modal.Body className="py-0">
            <div>
              <div className="mb-2">
                <label htmlFor="">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  onChange={handleInput}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="">Precio</label>
                <input
                  name="precio"
                  type="number"
                  className="form-control"
                  onChange={handleInput}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="">Tipo</label>
                <input
                  name="tipo"
                  type="text"
                  className="form-control"
                  onChange={handleInput}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="">Marca</label>
                <input
                  name="marca"
                  type="text"
                  className="form-control"
                  onChange={handleInput}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="">Estado</label>
                <input
                  name="estado_piano"
                  type="text"
                  className="form-control"
                  onChange={handleInput}
                />
                {/* <select name="" id="" className="form-select">
                  <option value="bodega">En bodega</option>
                </select> */}
              </div>
            </div>
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

export default AgregarMueble;
