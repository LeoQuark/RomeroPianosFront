import React from "react";
import { Col, Row, Card } from "react-bootstrap";

const Headers = ({
  titulo,
  dato,
  icon,
  iconColor,
  subtitulo,
  flecha,
  flechaColor,
}) => {
  return (
    <Col lg="3" sm="6" xs="6">
      <Card className="card-stats">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div className="mx-2">
              <div className={"icon-big text-center " + iconColor}>
                <i className={icon}></i>
              </div>
            </div>
            <div>
              <div className="numbers">
                <p className="card-category">{titulo}</p>
                <p className="text-xl">{dato}</p>
              </div>
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="py-0">
          <hr></hr>
          <div className="d-flex justify-content-start align-items-center text-muted my-2">
            <i
              className={
                flecha === "up"
                  ? "fas fa-arrow-up " + flechaColor
                  : flecha === "down"
                  ? "fas fa-arrow-down " + flechaColor
                  : ""
              }
            ></i>
            <div className="mx-2">{subtitulo}</div>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Headers;
