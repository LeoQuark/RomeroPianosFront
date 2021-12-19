import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import InfoProducto from "../Modals/InfoProducto.jsx";
import EditarTrabajador from "../Modals/Trabajadores/EditarTrabajador.jsx";
import EliminarProducto from "../Modals/EliminarProducto.jsx";
import Cargando from "../Cargando.jsx";

function TablaTrabajadores({ trabajadores, cargando }) {
  const [btnFiltrar, setBtnFiltrar] = useState(false);
  const [filtro, setFiltro] = useState("");
  const [paginacion, setPaginacion] = useState(0);
  // console.log(pianos);
  //funcion para filtrar los datos por la paginacion y el filtro por el nombre
  const filtrarDatos = () => {
    if (filtro.length === 0) {
      return trabajadores.slice(paginacion, paginacion + 5);
    }
    //si hay un nombre para filtrar
    const productoFiltrado = trabajadores.filter((prod) => {
      return prod.nombre.includes(filtro);
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
      trabajadores.filter((prod) => prod.nombre.includes(filtro)).length >
      paginacion + 5
    )
      setPaginacion(paginacion + 5);
  };

  const atras = () => {
    if (paginacion > 0) setPaginacion(paginacion - 5);
  };

  const filtrarNombre = (event) => {
    setPaginacion(0);
    setFiltro(event.target.value);
  };

  //funcion para enumerar correctamente las filas de la tabla
  const numConsecutivos = (num) => {
    if (paginacion === 0) return num;
    else return paginacion + num;
  };
  return (
    <div>
      <div className="container-fluid px-3 py-2">
        <div className="d-flex justify-content-start">
          <button className="btn btn-sm btn-dark" onClick={abrirInputFiltro}>
            Filtrar
          </button>
          {btnFiltrar && (
            <div className="w-25 mx-2">
              <input
                type="text"
                name="filtrar"
                className="form-control"
                placeholder="Filtrar por nombre"
                value={filtro}
                onChange={filtrarNombre}
              />
            </div>
          )}
        </div>
      </div>
      <Table className="table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {trabajadores ? (
            filtrarDatos().map((trabajador, index) => (
              <tr>
                <td className="text-dark" scope="row" key={index}>
                  {numConsecutivos(index + 1)}
                </td>
                <td className="text-dark">{trabajador.nombre}</td>
                <td className="text-dark">{trabajador.correo}</td>
                <td className="text-dark">{trabajador.telefono}</td>
                <td className="text-dark">
                  <div className="d-flex justify-content-start">
                    <div className="mx-1">
                      <EditarTrabajador trabajador={trabajador} className="" />
                    </div>
                    <div className="mx-1">
                      <EliminarProducto
                        producto={trabajador}
                        tipo="trabajador"
                        nombre={trabajador.nombre}
                      />
                    </div>
                    <div className="mx-1">
                      <InfoProducto producto={trabajador} tipo="trabajador" />
                    </div>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <div>{cargando ? <Cargando /> : "No hay productos"}</div>
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
    </div>
  );
}

export default TablaTrabajadores;
