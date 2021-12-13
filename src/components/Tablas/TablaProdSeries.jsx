import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import { formatearFecha } from "../../utils/formatear.js";

import AgregarProdSerie from "../Modals/ProdSeries/AgregarProdSerie.jsx";
import EditarProdSerie from "../Modals/ProdSeries/EditarProdSerie.jsx";
import EliminarProducto from "../Modals/EliminarProducto.jsx";
import InfoProducto from "../Modals/InfoProducto.jsx";
import Cargando from "../Cargando.jsx";

//Componente que muestra la tabla del inventario de pianos
function TablaProdSeries({ prod_serie, cargando }) {
  const [btnFiltrar, setBtnFiltrar] = useState(false);
  const [filtro, setFiltro] = useState("");
  const [paginacion, setPaginacion] = useState(0);
  // console.log(pianos);
  //funcion para filtrar los datos por la paginacion y el filtro por el nombre
  const filtrarDatos = () => {
    if (filtro.length === 0) {
      return prod_serie.slice(paginacion, paginacion + 5);
    }
    //si hay un nombre para filtrar
    const productoFiltrado = prod_serie.filter((prod) => {
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
      prod_serie.filter((prod) => prod.nombre.includes(filtro)).length >
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
            <Card.Title as="h4">Inventario de Productos en Serie</Card.Title>
            <p className="card-category">
              Aquí puedes agregar un nuevo producto, ver la información, editar
              y eliminar tus productos de tu inventario.
            </p>
          </div>
          <div className="col-12 col-sm-3 col-lg-2">
            <AgregarProdSerie />
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
              <th scope="col">Stock</th>
              <th scope="col">Fecha Registro</th>
              <th scope="col">Fecha Modificación</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {prod_serie ? (
              filtrarDatos().map((producto, key) => (
                <tr>
                  <td className="text-dark">{numConsecutivos(key + 1)}</td>
                  <td className="text-dark">{producto.nombre}</td>
                  <td className="text-dark">{producto.stock}</td>
                  <td className="text-dark">
                    {formatearFecha(producto.fecha_registro)}
                  </td>
                  <td className="text-dark">
                    {formatearFecha(producto.fecha_modificacion)}
                  </td>
                  <td className="text-dark">
                    <div className="d-flex justify-content-start justify-content-lg-between">
                      <EditarProdSerie producto={producto} />
                      <EliminarProducto
                        producto={producto}
                        tipo="prod_serie"
                        nombre={producto.nombre}
                      />
                      <InfoProducto producto={producto} tipo="prod_serie" />
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
      </Card.Body>
    </Card>
  );
}

export default TablaProdSeries;
