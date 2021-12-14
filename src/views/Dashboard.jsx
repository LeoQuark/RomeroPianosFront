import React, { useState, useEffect } from "react";
import ChartistGraph from "react-chartist";
import Headers from "../components/Estadisticas/Headers.jsx";
import GraficoLinea from "../components/Estadisticas/GraficoLinea.jsx";
import GraficoTorta from "../components/Estadisticas/GraficoTorta.jsx";

import axios from "axios";
import { API_URL } from "../utils/api-data.js";

// react-bootstrap components
import { Card, Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  const [estadistica, setEstadistica] = useState();

  useEffect(() => {
    const obtenerEstadistica = async () => {
      const res = await axios.get(`${API_URL}/estadistica/getAll`);
      console.log(res);
    };
    obtenerEstadistica();
  });

  return (
    <>
      <Container fluid>
        <Row>
          <Headers
            titulo="Ventas del mes"
            dato="$100.000"
            icon="fas fa-cart-plus fa-sm"
            iconColor="text-success"
            subtitulo="subtitulo"
            flecha="up"
            flechaColor="text-success"
          />
          {/* ventas , ingresos total, gastos totales, */}
          <Headers
            titulo="Ingresos totales"
            dato="$100.000"
            icon="fas fa-dollar-sign"
            iconColor="text-danger"
            subtitulo="subtitulo"
            flecha="down"
            flechaColor="text-danger"
          />
          <Headers
            titulo="Gastos totales"
            dato="$100.000"
            icon="fas fa-coins fa-sm"
            iconColor="text-info"
            subtitulo="subtitulo"
            flecha="up"
            flechaColor="text-success"
          />
          <Headers
            titulo="Ganancias del mes"
            dato="$100.000"
            icon="fas fa-chart-line fa-sm"
            iconColor="text-success"
            subtitulo="subtitulo"
            flecha="down"
            flechaColor="text-danger"
          />
        </Row>
        <Row>
          <Col md="8">
            <GraficoLinea />
          </Col>
          <Col md="4">
            <GraficoTorta />
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">2017 Sales</Card.Title>
                <p className="card-category">All products including Taxes</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "Mai",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                      series: [
                        [
                          542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756,
                          895,
                        ],
                        [
                          412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636,
                          695,
                        ],
                      ],
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 10,
                      axisX: {
                        showGrid: false,
                      },
                      height: "245px",
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          seriesBarDistance: 5,
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
                  <i className="fas fa-circle text-info"></i>
                  Tesla Model S <i className="fas fa-circle text-danger"></i>
                  BMW 5 Series
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-check"></i>
                  Data information certified
                </div>
              </Card.Footer>
            </Card>
          </Col>
          {/* <Col md="6">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4">Tasks</Card.Title>
                <p className="card-category">Backend development</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Sign contract for "What are conference organizers
                          afraid of?"
                        </td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-488980961">
                                Edit Task..
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-506045838">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Lines From Great Russian Literature? Or E-mails From
                          My Boss?
                        </td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-537440761">
                                Edit Task..
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-21130535">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Flooded: One year later, assessing what was lost and
                          what was found when a ravaging rain swept through
                          metro Detroit
                        </td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-577232198">
                                Edit Task..
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-773861645">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Create 4 Invisible User Experiences you Never Knew
                          About
                        </td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-422471719">
                                Edit Task..
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-829164576">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>Read "Following makes Medium better"</td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-160575228">
                                Edit Task..
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-922981635">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                disabled
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>Unfollow 5 enemies from twitter</td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-938342127">
                                Edit Task..
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-119603706">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="now-ui-icons loader_refresh spin"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
