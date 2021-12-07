import React, { useState, useEffect } from "react";
import { setVentasLocalStorage } from "../../utils/Storage.js";

function Paso1({ pianos, muebles }) {
  const [tipo, setTipo] = useState("piano");
  const [carrito, setCarrito] = useState([]);

  const handleSelect = (event) => {
    event.preventDefault();
    setTipo(`${event.target.value}`);
  };

  //agregar los productos seleccionados al estado carrito [objeto,objeto,objeto]
  const agregarProductos = (event, producto) => {
    event.preventDefault();
    setCarrito([...carrito, producto]);
    console.log(carrito);
    // agrego los datos al local storage
    setVentasLocalStorage(JSON.stringify(carrito));
  };

  //Funcion que retorna una tabla en funcion del tipo(options) seleccionado
  function TablaProductos() {
    if (tipo === "piano") {
      return (
        <div>
          <table className="table table-sm table-hover overflow-scroll">
            <thead>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Tipo</th>
              <th scope="col">Marca</th>
              <th scope="col">Precio</th>
              <th scope="col">Seleccion</th>
            </thead>
            <tbody>
              {pianos ? (
                pianos.map((piano, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{piano.nombre}</td>
                    <td>{piano.tipo}</td>
                    <td>{piano.marca}</td>
                    <td>{piano.precio}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-yellow"
                        onClick={(event) => agregarProductos(event, piano)}
                      >
                        Agregar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>1</td>
                  <td>piano 1</td>
                  <td>$50000</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      );
    } else if (tipo === "mueble") {
      return (
        <div>
          <table className="table table-sm table-hover overflow-scroll">
            <thead>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Categoria</th>
              <th scope="col">Origen</th>
              <th scope="col">Precio</th>
              <th scope="col">Seleccion</th>
            </thead>
            <tbody>
              {muebles ? (
                muebles.map((mueble, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{mueble.nombre}</td>
                    <td>{mueble.categoria}</td>
                    <td>{mueble.origen}</td>
                    <td>{mueble.precio}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-yellow"
                        onClick={(event) => agregarProductos(event, mueble)}
                      >
                        Agregar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>1</td>
                  <td>piano 1</td>
                  <td>$50000</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      );
    }
  }

  useEffect(() => {}, []);

  return (
    <div>
      <div>Paso 1</div>
      <div className="mb-2">
        <label htmlFor="" className="text-sm">
          Tipo de producto
        </label>
        <select
          name="select-producto"
          className="form-select form-select-sm"
          onChange={handleSelect}
        >
          <option value="piano">Pianos</option>
          <option value="mueble">Muebles</option>
          <option value="prod_serie">Productos en Serie</option>
        </select>
      </div>
      <div>{TablaProductos()}</div>
    </div>
  );
}

export default Paso1;
