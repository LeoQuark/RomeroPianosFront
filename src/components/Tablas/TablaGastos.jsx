import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import { formatearFecha } from "../../utils/formatear.js";

import AgregarMueble from "../Modals/Muebles/AgregarMueble.jsx";
import EditarMueble from "../Modals/Muebles/EditarMueble.jsx";
import EliminarProducto from "../Modals/EliminarProducto.jsx";
import InfoProducto from "../Modals/InfoProducto.jsx";
import Cargando from "../Cargando.jsx";

function TablaGastos({ gastos, cargando }) {
  const [btnFiltrar, setBtnFiltrar] = useState(false);
  const [filtro, setFiltro] = useState("");
  const [paginacion, setPaginacion] = useState(0);

  //funcion para filtrar los datos por la paginacion y el filtro por el nombre
  const filtrarDatos = () => {
    if (filtro.length === 0) {
      return gastos.slice(paginacion, paginacion + 5);
    }
    //si hay un nombre para filtrar
    const productoFiltrado = gastos.filter((prod) => {
      return prod.fecha.includes(filtro);
    });
    return productoFiltrado.slice(paginacion, paginacion + 5);
  };

  //funcion para abrir el apartado para ingresar el filtro (input)
  const abrirInputFiltro = () => {
    if (btnFiltrar == false) setBtnFiltrar(!btnFiltrar);
    else {
      setFiltro("");
      setBtnFiltrar(!btnFiltrar);
    }
  };

  //funciones para la paginacion
  const siguiente = () => {
    if (
      gastos.filter((prod) => prod.fecha.includes(filtro)).length >
      paginacion + 5
    )
      setPaginacion(paginacion + 5);
  };

  const atras = () => {
    if (paginacion > 0) setPaginacion(paginacion - 5);
  };

  const filtrarFecha = (event) => {
    setPaginacion(0);
    setFiltro(event.target.value);
  };

  //funcion para enumerar correctamente las filas de la tabla
  const numConsecutivos = (num) => {
    if (paginacion === 0) return num;
    else return paginacion + num;
  };

  return (
    <Card className="strpied-tabled-with-hover">
      <Card.Body className="table-full-width table-responsive px-0">
        <div className="container-fluid px-3 py-2">
          <div className="d-flex justify-content-start">
            <button className="btn btn-sm btn-dark" onClick={abrirInputFiltro}>
              Filtrar por fecha
            </button>
            {btnFiltrar && (
              <div className="w-25 mx-2">
                <input
                  type="date"
                  name="filtrar"
                  className="form-control py-0 px-1"
                  placeholder="Filtrar por fecha"
                  value={filtro}
                  onChange={filtrarFecha}
                />
              </div>
            )}
          </div>
        </div>
        <Table className="table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Monto</th>
              <th scope="col w-100">Descripción</th>
              <th scope="col">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {gastos ? (
              filtrarDatos().map((gasto, index) => (
                <tr>
                  <td className="text-dark" scope="row">
                    {numConsecutivos(index + 1)}
                  </td>
                  <td className="text-dark">{gasto.monto}</td>
                  <td className="text-dark">{gasto.descripcion}</td>
                  <td className="text-dark">{formatearFecha(gasto.fecha)}</td>
                </tr>
              ))
            ) : (
              <tr style={{ borderBottom: "1px solid white" }}>
                {cargando ? <Cargando /> : <td>No hay productos</td>}
              </tr>
            )}
          </tbody>
        </Table>
        <div className="container-fluid">
          <div className="d-flex justify-content-center w-100">
            <button className="btn btn-sm btn-dark mx-2" onClick={atras}>
              Anterior
            </button>
            <button className="btn btn-sm btn-dark mx-2" onClick={siguiente}>
              Siguiente
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TablaGastos;
