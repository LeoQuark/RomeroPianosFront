import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { obtenerInfoPorId } from "../../../utils/peticiones.js";

import { formatearFecha } from "../../../utils/formatear.js";

function InfoVentas({ id_venta, id_cliente }) {
  const [infoVenta, setInfoVenta] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(async () => {
    // const get = await obtenerInfoPorId(id_venta, id_cliente);
    // if (get != "error") {
    //   setInfoVenta(get);
    // }
  }, []);

  return (
    <>
      <button className="btn btn-sm btn-secondary" onClick={handleShow}>
        Info
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="py-0">
          {/* <Modal.Title></Modal.Title> */}
          <div className="row d-flex mt-3">
            <h3>Información de la venta</h3>
            <p className="text-muted text-sm">ID: {`${id_venta}`}</p>
          </div>
        </Modal.Header>
        <Modal.Body className="py-0 mx-0">
          <div>
            <table className="table table-sm table-striped">
              <tbody></tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex w-100 justify-content-end w-100">
            <button
              className="btn btn-sm btn-yellow"
              onClick={() => setShow(false)}
            >
              Todo Ok
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InfoVentas;
