import React from "react";
import ChartistGraph from "react-chartist";
import { Card } from "react-bootstrap";

const GraficoTorta = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title as="h4">Email Statistics</Card.Title>
        <p className="card-category">Last Campaign Performance</p>
      </Card.Header>
      <Card.Body>
        <div className="ct-chart ct-perfect-fourth" id="chartPreferences">
          <ChartistGraph
            data={{
              labels: ["40%", "20%", "40%"],
              series: [40, 20, 40],
            }}
            type="Pie"
          />
        </div>
        <div className="legend">
          <i className="fas fa-circle text-info"></i>
          Open <i className="fas fa-circle text-danger"></i>
          Bounce <i className="fas fa-circle text-warning"></i>
          Unsubscribe
        </div>
        <hr></hr>
        <div className="stats">
          <i className="far fa-clock"></i>
          Campaign sent 2 days ago
        </div>
      </Card.Body>
    </Card>
  );
};

export default GraficoTorta;
