import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";
import { obtenerTodos, agregarProducto } from "../utils/peticiones.js";
import TablaImportaciones from "../components/Tablas/TablaImportaciones.jsx";

const messageError = "Este campo es obligatorio";
const schema = yup
  .object({
    precioProducto: yup.number().typeError(messageError).required(messageError),
    dolar: yup.number().typeError(messageError).required(messageError),
    piso: yup.number().typeError(messageError).required(messageError),
    cantidadProducto: yup
      .number()
      .typeError(messageError)
      .required(messageError),
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

  const location = useLocation();
  const history = useHistory();
  const [cargando, setCargando] = useState(true);
  const [importaciones, setImportaciones] = useState();
  const [datosImportacion, setDatosImportacion] = useState({});
  const [valorDolar, setValorDolar] = useState();

  const handleInput = (event) => {
    event.preventDefault();
    setDatosImportacion({
      ...datosImportacion,
      [event.target.name]: event.target.value,
    });
  };

  const agregarDB = async () => {
    const post = await agregarProducto(datosImportacion, "importacion");
    if (post != "error") {
      history.push("/admin/importaciones");
    }
  };

  useEffect(() => {
    const obtenerRegistros = async () => {
      const get = await obtenerTodos("importacion");
      if (get != "error") {
        setImportaciones(get);
      }
    };

    const obtenerDolar = async () => {
      const res = await axios.get("https://mindicador.cl/api/dolar");
      setValorDolar(Math.round(res.data.serie[0].valor));
    };

    obtenerDolar();
    obtenerRegistros();
  }, [location]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-4 col-lg-4 gy-2">
          <Card className="strpied-tabled-with-hover px-2">
            <Card.Header>
              <Card.Title as="h4">Ingresa una importación</Card.Title>
              <div className="row">
                <p className="card-category text-muted text-sm">
                  Agrega y visualiza tus importaciones.
                </p>
              </div>
              <hr className="mt-4" />
            </Card.Header>
            <Card.Body className="table-full-width table-responsive px-0">
              <div className="row">
                <form onSubmit={handleSubmit(agregarDB)}>
                  <div className="d-flex">
                    <div className="mb-2 mx-1">
                      <label className="text-sm">Precio producto</label>
                      <input
                        type="number"
                        name="precioProducto"
                        className="form-control"
                        placeholder="$$$"
                        {...register("precioProducto")}
                        onChange={handleInput}
                      />
                      <span className="text-danger text-xs">
                        {errors.precioProducto?.message}
                      </span>
                    </div>
                    <div className="mb-2 mx-1">
                      <label className="text-sm">Cantidad productos</label>
                      <input
                        type="number"
                        name="dolar"
                        className="form-control"
                        // defaultValue={cantidad}
                        placeholder="1"
                        {...register("cantidadProducto")}
                        onChange={handleInput}
                      />
                      <span className="text-danger text-xs">
                        {errors.cantidadProducto?.message}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="mb-2 mx-1">
                      <label className="text-sm">Dolar</label>
                      <input
                        type="number"
                        name="dolar"
                        className="form-control"
                        // defaultValue={valorDolar}
                        placeholder={valorDolar}
                        {...register("dolar")}
                        onChange={handleInput}
                      />
                      <span className="text-danger text-xs">
                        {errors.dolar?.message}
                      </span>
                    </div>
                    <div className="mb-2 mx-1">
                      <label className="text-sm">Piso</label>
                      <input
                        type="number"
                        name="piso"
                        className="form-control"
                        placeholder="$$$"
                        {...register("piso")}
                        onChange={handleInput}
                      />
                      <span className="text-danger text-xs">
                        {errors.piso?.message}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <button type="submit" className="btn btn-yellow">
                      Ingresar gasto
                    </button>
                  </div>
                </form>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-sm-8 col-lg-8 gy-2">
          <TablaImportaciones
            importaciones={importaciones}
            cargando={cargando}
          />
        </div>
      </div>
    </div>
  );
};

export default Importaciones;
