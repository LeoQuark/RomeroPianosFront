import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { obtenerInfoVentaPorId } from "../../../utils/peticiones.js";
import Cargando from "../../Cargando.jsx";
import { formatearFecha } from "../../../utils/formatear.js";

const Tabla = (props) => {
  return (
    <div className="my-2">
      <div className="text-capitalize bg-dark text-white px-2 rounded-top">{`Datos ${props.tipo}`}</div>
      <table className="table table-sm table-striped">
        <tbody>
          {props.datos ? (
            Object.keys(props.datos).map((dato) => (
              <tr>
                {/* {console.log(infoVenta.cliente[`${dato}`])} */}
                <td className="text-sm">{dato}</td>
                <td className="text-sm">{props.datos[`${dato}`]}</td>
              </tr>
            ))
          ) : (
            <Cargando />
          )}
        </tbody>
      </table>
    </div>
  );
};

function InfoVentas({ venta }) {
  const [infoVenta, setInfoVenta] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const get = await obtenerInfoVentaPorId(venta.id_venta, venta.id_cliente);
    if (get != "error") {
      setInfoVenta(get);
    }
  };

  const mostrarProduto = (infoVenta) => {
    let arregloAux = [infoVenta.piano, infoVenta.mueble, infoVenta.prod_serie];
    console.log(infoVenta);
    for (let producto in arregloAux) {
      // console.log(producto && producto);
      return producto && producto;
    }
  };

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
            <p className="text-muted text-sm">ID: {venta.id_venta}</p>
          </div>
        </Modal.Header>
        <Modal.Body className="py-0 mx-0">
          <div>
            {infoVenta && (
              <div>
                <Tabla datos={infoVenta.cliente} tipo={"cliente"} />
              </div>
            )}
            {/* {infoVenta && mostrarProduto(infoVenta)} */}
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
