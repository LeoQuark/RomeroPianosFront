import React from "react";
import ChartistGraph from "react-chartist";
import { Card } from "react-bootstrap";

const GraficoTorta = ({ datos }) => {
  const fecha = new Date();
  const mes = fecha.getMonth();
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const mesActual = (mes) => {
    for (let i = 0; i < meses.length; i++) {
      if (i === mes) {
        return meses[i];
      }
    }
  };

  const cantidadTotal = () => {
    let total = datos[0] + datos[1] + datos[2];
    let pPiano = (datos[0] / total) * 100,
      pMueble = (datos[1] / total) * 100,
      pProducto = (datos[2] / total) * 100;
    return [
      Math.round(pPiano * 100) / 100,
      Math.round(pMueble * 100) / 100,
      Math.round(pProducto * 100) / 100,
    ];
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">% Cantidad de ventas por producto</Card.Title>
        <p className="card-category text-muted">{mesActual(mes)}</p>
      </Card.Header>
      <Card.Body className="my-4">
        <div className="ct-chart ct-perfect-fourth" id="chartPreferences">
          <ChartistGraph
            data={{
              labels: [
                `${cantidadTotal()[0]}%`,
                `${cantidadTotal()[1]}%`,
                `${cantidadTotal()[2]}%`,
              ],
              series: [datos[0], datos[1], datos[2]],
            }}
            type="Pie"
          />
        </div>
        <div className="legend text-sm">
          <i className="fas fa-circle text-info"></i>
          Pianos <i className="fas fa-circle text-danger"></i>
          Muebles <i className="fas fa-circle text-warning"></i>
          Productos en serie
        </div>
      </Card.Body>
    </Card>
  );
};

export default GraficoTorta;
