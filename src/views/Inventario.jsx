import axios from "axios";
import React, { useState, useEffect } from "react";

const Inventario = () => {
  const [pianos, setPianos] = useState(false);

  const obtenerPianos = async () => {
    const res = await axios.get(
      "https://romeropianos.herokuapp.com/piano/getAll"
    );
    // .then((response) => {
    //   console.log(response.data.data);
    // });
    // console.log(res);
    if (res.status == 200) {
      setPianos(res.data.data);
    }
  };

  console.log(pianos);

  useEffect(() => {
    obtenerPianos();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <table className="table">
            <thead>
              <th>test</th>
            </thead>
            <tbody>
              {pianos &&
                pianos.map((piano, key) => (
                  <tr>
                    {console.log(piano)}
                    <td className="text-dark">{piano.id_piano}</td>
                    <td className="text-dark">{piano.nombre}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventario;
