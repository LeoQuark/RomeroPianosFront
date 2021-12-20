import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Headers from "../components/Estadisticas/Headers.jsx";
import GraficoLinea from "../components/Estadisticas/GraficoLinea.jsx";
import GraficoTorta from "../components/Estadisticas/GraficoTorta.jsx";
import Cargando from "../components/Cargando.jsx";

import { formatearPrecio } from "../utils/formatear.js";
import { obtenerTodos } from "../utils/peticiones.js";

// react-bootstrap components
import { Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  const location = useLocation();
  const [estadistica, setEstadistica] = useState();

  const restaValores = (ahora, anterior) => {
    let valorAhora = formatearPrecio(ahora),
      valorAnterior = anterior != 0 ? formatearPrecio(anterior) : anterior;

    if (valorAhora > valorAnterior) return "up";
    else if (valorAhora < valorAnterior) return "down";
  };

  const restaCantidad = (ahora, anterior) => {
    let ahoraInt = parseInt(ahora),
      anteriorInt = parseInt(anterior);
    if (ahoraInt > anteriorInt) return "up";
    else if (ahoraInt < anteriorInt) return "down";
  };

  useEffect(async () => {
    const get = await obtenerTodos("estadistica");
    if (get != "error") {
      setEstadistica(get);
    }
  }, [location]);

  return (
    <>
      <Container fluid>
        {estadistica ? (
          <Row>
            <Headers
              titulo="Ventas del mes"
              dato={estadistica.ventas[0]}
              icon="fas fa-cart-plus fa-sm"
              iconColor="text-success"
              subtitulo="Último mes"
              flecha={restaCantidad(
                estadistica.ventas[0],
                estadistica.ventas[1]
              )}
              flechaColor={
                restaCantidad(estadistica.ventas[0], estadistica.ventas[1]) ===
                "up"
                  ? "text-success"
                  : "text-danger"
              }
            />
            <Headers
              titulo="Ingresos totales"
              dato={estadistica.ventasValor[0]}
              icon="fas fa-dollar-sign"
              iconColor="text-danger"
              subtitulo="Último mes"
              flecha={restaValores(
                estadistica.ventasValor[0],
                estadistica.ventasValor[1]
              )}
              flechaColor={
                restaValores(
                  estadistica.ventasValor[0],
                  estadistica.ventasValor[1]
                ) === "up"
                  ? "text-success"
                  : "text-danger"
              }
            />
            <Headers
              titulo="Gastos totales"
              dato={estadistica.costos[0]}
              icon="fas fa-coins fa-sm"
              iconColor="text-info"
              subtitulo="Último mes"
              flecha={restaValores(
                estadistica.costos[0],
                estadistica.costos[1]
              )}
              flechaColor={
                restaValores(estadistica.costos[0], estadistica.costos[1]) ===
                "up"
                  ? "text-success"
                  : "text-danger"
              }
            />
            <Headers
              titulo="Ganancias del mes"
              dato={estadistica.proffit[0]}
              icon="fas fa-chart-line fa-sm"
              iconColor="text-success"
              subtitulo="Último mes"
              flecha={restaCantidad(
                estadistica.costos[0],
                estadistica.costos[1]
              )}
              flechaColor={
                restaCantidad(
                  estadistica.proffit[0],
                  estadistica.proffit[1]
                ) === "up"
                  ? "text-success"
                  : "text-danger"
              }
            />
          </Row>
        ) : (
          <Cargando />
        )}
        {estadistica ? (
          <Row>
            <Col md="8">
              <GraficoLinea datos={estadistica.graficoLine} />
            </Col>
            <Col md="4">
              <GraficoTorta datos={estadistica.graficoCirc} />
            </Col>
          </Row>
        ) : (
          <Cargando />
        )}
      </Container>
    </>
  );
};

export default Dashboard;
