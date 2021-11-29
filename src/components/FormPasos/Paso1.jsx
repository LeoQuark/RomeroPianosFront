import React, { useState, useEffect } from "react";

function Paso1() {
  const [tipo, setTipo] = useState("piano");
  const [piano, setPiano] = useState();
  const [mueble, setMueble] = useState();
  const [prodSerie, setProdSerie] = useState();

  const handleSelect = (event) => {
    event.preventDefault();
    setTipo(`${event.target.value}`);
  };

  async function getProductos() {
    const res = await Promise.all(
      (resPiano = axios.get()),
      (resMueble = axios.get()),
      (resProdSerie = axios.get())
    );
  }

  function TablaProductos() {
    if (tipo === "piano") {
      return (
        <div>
          <table className="table table-sm table-hover overflow-scroll">
            <thead>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>piano 1</td>
                <td>$50000</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }

  return (
    <div>
      <div>Paso 1</div>
      <div className="mb-2">
        <label htmlFor="" className="text-sm">
          Tipo de producto
        </label>
        <select
          name=""
          id=""
          className="form-select form-select-sm"
          onChange={handleSelect}
        >
          <option value="piano">Pianos</option>
          <option value="muebles">Muebles</option>
          <option value="prod_serie">Productos en Serie</option>
        </select>
      </div>
      <div>{TablaProductos()}</div>
    </div>
  );
}

export default Paso1;
