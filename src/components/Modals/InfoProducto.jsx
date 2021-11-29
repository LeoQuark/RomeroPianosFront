import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import API_URL from "../../utils/api-data.js";

function InfoProducto({ producto, tipo, nombre }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn btn-sm btn-secondary" onClick={handleShow}>
        Info
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="py-0">
          {/* <Modal.Title></Modal.Title> */}
          <div className="row d-flex mt-3">
            <h3>{`Información del ${tipo}`}</h3>
            <p className="text-muted text-sm">
              ID: {`${producto[`id_${tipo}`]}`}
            </p>
          </div>
        </Modal.Header>
        <Modal.Body className="py-0 mx-0">
          <div>
            <table className="table table-sm table-striped">
              <tbody>
                {Object.keys(producto).map(
                  (dato, key) =>
                    dato != `id_${tipo}` && (
                      <tr>
                        <td>{dato}</td>
                        <td>{producto[`${dato}`]}</td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex w-100 justify-content-between mt-4">
            <button
              className="btn btn-sm btn-yellow"
              onClick={() => setShow(false)}
            >
              Todo Ok
            </button>
            <button className="btn-outline-gray" onClick={() => setShow(false)}>
              Cerrar
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InfoProducto;
