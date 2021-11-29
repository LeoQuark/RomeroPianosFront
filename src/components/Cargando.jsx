import React from "react";

const Cargando = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="spinner-border text-dark ml-2" role="status"></div>
        <div className="spinner-border text-warning mx-2" role="status"></div>
        <div className="spinner-border text-dark mr-2" role="status"></div>
      </div>
    </div>
  );
};

export default Cargando;
