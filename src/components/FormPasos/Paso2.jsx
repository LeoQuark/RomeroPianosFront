import React, { useState, useEffect } from "react";
import { getVentasLocalStorage } from "../../utils/Storage.js";

function Paso2() {
  const [carrito, setCarrito] = useState([]);

  const handleSelect = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  useEffect(() => {
    //se obtienen los datos del local storage (venta)
    setCarrito(getVentasLocalStorage());
  }, []);

  return (
    <div>
      <div>Paso 2: Resumen</div>
      {/* <div className="mb-2">
        <label htmlFor=""></label>
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
      </div> */}
      <div>
        <table className="table table-sm table-hover overflow-scroll">
          <thead>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
          </thead>
          <tbody>
            <tr>
              <td>{console.log(carrito)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Paso2;
