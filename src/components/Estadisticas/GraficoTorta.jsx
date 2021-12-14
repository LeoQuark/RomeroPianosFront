import React from "react";
import ChartistGraph from "react-chartist";
import { Card } from "react-bootstrap";

const GraficoTorta = () => {
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
  return (
    <Card>
      <Card.Header>
        <Card.Title as="h4">% Productos vendidos</Card.Title>
        <p className="card-category text-muted">{mesActual(mes)}</p>
      </Card.Header>
      <Card.Body className="my-4">
        <div className="ct-chart ct-perfect-fourth" id="chartPreferences">
          <ChartistGraph
            data={{
              labels: ["40%", "20%", "40%"],
              series: [40, 20, 40],
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
        {/* <hr></hr>
        <div className="stats">
          <i className="far fa-clock"></i>
          Campaign sent 2 days ago
        </div> */}
      </Card.Body>
    </Card>
  );
};

export default GraficoTorta;
