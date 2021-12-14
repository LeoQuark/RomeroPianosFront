import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import { formatearFecha } from "../../utils/formatear.js";

import AgregarMueble from "../Modals/Muebles/AgregarMueble.jsx";
import EditarMueble from "../Modals/Muebles/EditarMueble.jsx";
import EliminarProducto from "../Modals/EliminarProducto.jsx";
import InfoProducto from "../Modals/InfoProducto.jsx";
import Cargando from "../Cargando.jsx";

function TablaMuebles({ muebles, cargando }) {
  const [btnFiltrar, setBtnFiltrar] = useState(false);
  const [filtro, setFiltro] = useState("");
  const [paginacion, setPaginacion] = useState(0);

  //funcion para filtrar los datos por la paginacion y el filtro por el nombre
  const filtrarDatos = () => {
    if (filtro.length === 0) {
      return muebles.slice(paginacion, paginacion + 5);
    }
    //si hay un nombre para filtrar
    const productoFiltrado = muebles.filter((prod) => {
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
      muebles.filter((prod) => prod.nombre.includes(filtro)).length >
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
    <Card className="strpied-tabled-with-hover">
      <Card.Header>
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-sm-8 col-lg-6">
            <Card.Title as="h4">Inventario de Muebles</Card.Title>
            <p className="card-category">
              Aquí puedes agregar un nuevo producto, ver la información, editar
              y eliminar tus productos de tu inventario.
            </p>
          </div>
          <div className="col-12 col-sm-3 col-lg-2">
            <AgregarMueble />
          </div>
        </div>
      </Card.Header>
      <Card.Body className="table-full-width table-responsive px-0">
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
              <th scope="col">Costo Final</th>
              <th scope="col">Categoria</th>
              <th scope="col">Origen</th>
              <th scope="col">Estado</th>
              <th scope="col">Fecha Ingreso</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {muebles ? (
              filtrarDatos().map((mueble, key) => (
                <tr>
                  <td className="text-dark" scope="row">
                    {numConsecutivos(key + 1)}
                  </td>
                  <td className="text-dark">{mueble.nombre}</td>
                  <td className="text-dark">{mueble.costo_final}</td>
                  <td className="text-dark">{mueble.categoria}</td>
                  <td className="text-dark">{mueble.origen}</td>
                  <td className="text-dark">{mueble.estado_mueble}</td>
                  <td className="text-dark">{formatearFecha(mueble.fecha)}</td>
                  <td className="text-dark">
                    <div className="d-flex justify-content-start justify-content-lg-between">
                      <EditarMueble mueble={mueble} />
                      <EliminarProducto
                        producto={mueble}
                        tipo="mueble"
                        nombre={mueble.nombre}
                      />
                      <InfoProducto producto={mueble} tipo="mueble" />
                    </div>
                  </td>
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

export default TablaMuebles;
