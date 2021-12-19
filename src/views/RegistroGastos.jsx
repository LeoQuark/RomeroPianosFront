import React, { useState, useEffect, useContext } from "react";
import { Card } from "react-bootstrap";
import UsuarioContext from "../context/Usuario/UsuarioContext.js";
import { useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { agregarProducto, obtenerTodos } from "../utils/peticiones.js";

import TablaGastos from "../components/Tablas/TablaGastos.jsx";

//funciones (yup package) para validar los datos del formulario
const messageError = "Este campo es obligatorio";
const schema = yup
  .object({
    monto: yup.number().typeError(messageError).required(messageError),
    descripcion: yup.string().min(2).required(messageError),
  })
  .required();

const RegistroGastos = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { usuario } = useContext(UsuarioContext);
  const [cargando, setCargando] = useState(true);
  const history = useHistory();
  const location = useLocation();
  const [gastos, setGastos] = useState();
  const [datosGastos, setDatosGastos] = useState({});

  const handleInput = (event) => {
    event.preventDefault();
    setDatosGastos({ ...datosGastos, [event.target.name]: event.target.value });
  };

  const agregarDB = async () => {
    setDatosGastos({
      ...datosGastos,
      ["idUsuario"]: usuario.id_usuario,
    });
    const post = await agregarProducto(datosGastos, "gasto");
    if (post != "error") {
      history.push("/admin/registro-gastos");
    }
  };

  useEffect(async () => {
    const get = await obtenerTodos("gasto");
    setGastos(get);
  }, [location]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-4 col-lg-4 gy-2">
          <Card className="strpied-tabled-with-hover px-2">
            <Card.Header>
              <Card.Title as="h4">Registro de Gastos</Card.Title>
              <div className="row">
                <p className="card-category text-muted">
                  Agrega y visualiza tu registro de gastos.
                </p>
              </div>
              <hr className="mt-4" />
            </Card.Header>
            <Card.Body className="table-full-width table-responsive px-0">
              <div className="row">
                <form onSubmit={handleSubmit(agregarDB)}>
                  <div className="mb-2">
                    <label className="text-sm">Monto</label>
                    <input
                      type="number"
                      name="monto"
                      className="form-control"
                      defaultValue={"$$$"}
                      {...register("monto")}
                      onChange={handleInput}
                    />
                    <span className="text-danger text-xs">
                      {errors.monto?.message}
                    </span>
                  </div>
                  <div className="mb-2">
                    <label className="text-sm">Descripción</label>
                    <textarea
                      type="text"
                      name="descripcion"
                      rows="3"
                      className="form-control h-100"
                      placeholder="Descripcion"
                      {...register("descripcion")}
                      onChange={handleInput}
                    ></textarea>
                    <span className="text-danger text-xs">
                      {errors.descripcion?.message}
                    </span>
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
          <TablaGastos gastos={gastos} cargando={cargando} />
        </div>
      </div>
    </div>
  );
};

export default RegistroGastos;
