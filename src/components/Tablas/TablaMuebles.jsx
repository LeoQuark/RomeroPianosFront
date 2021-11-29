import React, { useEffect } from "react";

function TablaMuebles({ pianos }) {
  //   console.log(pianos);

  useEffect(() => {
    console.log(pianos);
  }, []);

  return (
    <table className="table">
      <thead>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Precio</th>
        <th scope="col">Tipo</th>
        <th scope="col">Marca</th>
        <th scope="col">Estado</th>
        <th scope="col">Fecha Ingreso</th>
        <th scope="col">Acciones</th>
      </thead>
      <tbody>
        {pianos ? (
          pianos.map((piano, key) => (
            <tr>
              {console.log(piano)}
              <td className="text-dark" scope="row">
                {key + 1}
              </td>
              <td className="text-dark">{piano.nombre}</td>
              <td className="text-dark">{piano.precio}</td>
              <td className="text-dark">{piano.tipo}</td>
              <td className="text-dark">{piano.marca}</td>
              <td className="text-dark">{"elel"}</td>
              <td className="text-dark">{piano.fecha}</td>
              <td className="text-dark">
                <div className="d-flex justify-content-between">
                  <button className="btn btn-sm btn-primary">Editar</button>
                  <button className="btn btn-sm btn-danger">Eliminar</button>
                  <button className="btn btn-sm btn-secondary">Info</button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <div>no hay pianos</div>
        )}
      </tbody>
    </table>
  );
}

export default TablaMuebles;
