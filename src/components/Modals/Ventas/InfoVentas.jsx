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
            Object.keys(props.datos).map(
              (dato) =>
                dato != "id_cliente" && (
                  <tr>
                    <td className="text-sm">{dato}</td>
                    <td className="text-sm">{props.datos[`${dato}`]}</td>
                  </tr>
                )
            )
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
    let arregloProd = [infoVenta.piano, infoVenta.mueble, infoVenta.prod_serie];
    // console.log(arregloProd);
    const producto = arregloProd.map((producto) => producto && producto);
    // console.log(producto);
  };

  console.log(infoVenta);

  return (
    <>
      <button className="btn btn-sm btn-secondary" onClick={handleShow}>
        Info
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="py-0">
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
                <Tabla
                  datos={
                    infoVenta.mueble
                      ? infoVenta.mueble
                      : infoVenta.piano
                      ? infoVenta.piano
                      : infoVenta.prod_serie && infoVenta.prod_serie
                  }
                  tipo={
                    infoVenta.mueble
                      ? "mueble"
                      : infoVenta.piano
                      ? "piano"
                      : infoVenta.prod_serie && "producto en serie"
                  }
                />
              </div>
            )}
            {mostrarProduto(infoVenta)}
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
