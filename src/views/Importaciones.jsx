import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const messageError = "Este campo es obligatorio";
const schema = yup
  .object({
    nombre: yup.string().required(messageError),
    precio: yup.number().typeError(messageError).required(messageError),
    tipo: yup.string().required(messageError),
  })
  .required();

const Importaciones = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [masVariables, setMasVariables] = useState(false);

  const obtenerDolar = async () => {
    const res = await axios.get("https://mindicador.cl/api/dolar");
    console.log(res.data);
  };

  console.log(obtenerDolar);

  return (
    <div className="container-fluid h-100">
      <Card className="strpied-tabled-with-hover">
        <Card.Header>
          <div className="row d-flex justify-content-between">
            <Card.Title as="h4">Cálculo de Importaciones</Card.Title>
            <p className="card-category text-muted my-2">
              en esta sección puedes obtener el valor de la imporación de un
              producto determinado. De igual forma, puede cambiar los valores de
              las variables para tener un calculo más personalizado.
            </p>
          </div>
        </Card.Header>
        <Card.Body className="table-full-width table-responsive px-0">
          {/* valor del dolar, valor del producto */}
          <div className="container">
            <hr className="mt-0 mb-2" />
            <form action="" className="">
              <div className="row d-flex justify-content-between">
                <div className="col-12 col-md-12 col-lg-4">
                  <div className="d-flex justify-content-between">
                    <div className="mb-2 mx-1 w-100">
                      <label className="text-sm">Valor del dolar</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="$$$"
                        name="dolar"
                      />
                    </div>
                    <div className="mb-2 mx-1 w-100">
                      <label className="text-sm">Valor del producto</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="$$$"
                        name="valorProducto"
                      />
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="d-flex justify-content-center text-xs text-muted">
                      Modificar variables
                    </div>
                    <div className="d-flex justify-content-center">
                      <div onClick={() => setMasVariables(!masVariables)}>
                        <i class="fas fa-plus-circle"></i>
                      </div>
                    </div>
                  </div>
                  {masVariables && (
                    <div>
                      <div className="mb-2">
                        <label className="text-sm">Otros valores</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="col-12 col-lg-2 pt-4">
                  <button className="btn btn-sm btn-dark w-100 w">
                    Calcular
                  </button>
                </div>
                <div className="col-4">
                  <div className="d-flex justify-content-start pt-4 pt-lg-0">
                    <div>El resultado es</div>
                  </div>
                  <div
                    className="d-flex justify-content-start"
                    style={{ fontSize: "40px" }}
                  >
                    <div>{`$${0}`}</div>
                  </div>
                  <div className="d-flex justify-content-start pt-4 pt-lg-0">
                    <button className="btn btn-sm btn-yellow">
                      Guardar calculo
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Importaciones;
