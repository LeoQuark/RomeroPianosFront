import React, { useState, useEffect, useContext } from "react";
import CarritoContext from "../../context/Carrito/CarritoContext.js";

import TablaPianosCarrito from "./TablaPianosCarrito.jsx";
import TablaMueblesCarrito from "./TablaMueblesCarrito.jsx";
import TablaProductosCarrito from "./TablaProductosCarrito.jsx";

//primer paso para agregar una venta -- agregar productos pianos y/o muebles al carrito
function Paso1({ pianos, muebles, productos }) {
  //contexto del carrito y variables
  const { carrito, agregarProducto } = useContext(CarritoContext);
  const [tipo, setTipo] = useState("piano");

  //funcion que asigna el tipo de producto seleccionado en el select-options
  const handleSelect = (event) => {
    event.preventDefault();
    setTipo(`${event.target.value}`);
  };

  //agregar los productos seleccionados al estado carrito [objeto,objeto,objeto]
  const agregarProductos = (event, producto, tipo, cantidad) => {
    event.preventDefault();
    const productoSeleccionado = {
      id: `${producto[`id_${tipo}`]}`,
      nombre: producto.nombre,
      cantidad,
      tipo: tipo === "prod_serie" ? "producto" : tipo,
      precio:
        tipo === "piano" || tipo === "prod_serie"
          ? producto.precio
          : tipo === "mueble"
          ? producto.costo_final
          : "1000",
    };
    console.log(productoSeleccionado);
    agregarProducto(productoSeleccionado);
    // setCarrito(productoSeleccionado);
  };

  useEffect(() => {}, [carrito]);

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
          <option value="producto">Productos en serie</option>
        </select>
      </div>
      <div>
        {tipo === "piano" ? (
          <TablaPianosCarrito
            pianos={pianos}
            agregarProductos={agregarProductos}
            carrito={carrito}
          />
        ) : tipo === "mueble" ? (
          <TablaMueblesCarrito
            muebles={muebles}
            agregarProductos={agregarProductos}
            carrito={carrito}
          />
        ) : (
          <TablaProductosCarrito
            productos={productos}
            agregarProductos={agregarProductos}
            carrito={carrito}
          />
        )}
      </div>
    </div>
  );
}

export default Paso1;
