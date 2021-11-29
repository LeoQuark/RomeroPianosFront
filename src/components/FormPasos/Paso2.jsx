import React, { useState, useEffect } from "react";

function Paso2() {
  const handleSelect = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };
  return (
    <div>
      <div>Paso 2</div>
      <div className="mb-2">
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
      </div>
      <div></div>
    </div>
  );
}

export default Paso2;
