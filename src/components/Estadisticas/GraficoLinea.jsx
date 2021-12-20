import React from "react";
import ChartistGraph from "react-chartist";
import { Card } from "react-bootstrap";

const GraficoLinea = ({ datos }) => {
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

  const datosLabel = () => {
    let arregloAux = [];
    datos[0].map((dato) => arregloAux.push(dato));
    return arregloAux;
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h4">Ganancias por mes</Card.Title>
        <p className="card-category text-muted">{mesActual(mes)}</p>
      </Card.Header>
      <Card.Body className="my-2">
        <div className="ct-chart" id="chartHours">
          <ChartistGraph
            data={{
              labels: datosLabel(),
              series: [datos[1].map((dato) => dato)],
            }}
            type="Line"
            options={{
              low: 0,
              high: 2.5,
              showArea: false,
              height: "245px",
              axisX: {
                showGrid: false,
              },
              lineSmooth: true,
              showLine: true,
              showPoint: true,
              fullWidth: true,
              chartPadding: {
                right: 50,
              },
            }}
            responsiveOptions={[
              [
                "screen and (max-width: 640px)",
                {
                  axisX: {
                    labelInterpolationFnc: function (value) {
                      return value[0];
                    },
                  },
                },
              ],
            ]}
          />
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="legend">
          <i className="fas fa-circle text-info mx-1 text-sm"></i>
          Relación Ingreso / Gasto por mes
        </div>
      </Card.Footer>
    </Card>
  );
};

export default GraficoLinea;
