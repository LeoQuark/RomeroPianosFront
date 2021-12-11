import React, { Component, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Tooltip,
  Button,
  OverlayTrigger,
} from "react-bootstrap";
import UsuarioContext from "../../context/Usuario/UsuarioContext.js";

import routes from "routes.js";

function Header() {
  const location = useLocation();
  const { usuario, signOff } = useContext(UsuarioContext);

  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Cerrar sesión
    </Tooltip>
  );

  return (
    <Navbar bg="white" expand="lg" className="border-0">
      <Container fluid className="w-100">
        <div className="d-flex justify-content-start">
          <Button
            variant="dark"
            className="d-lg-none d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="fas fa-ellipsis-v"></i>
          </Button>
          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            {getBrandText()}
          </Navbar.Brand>
        </div>
        <Navbar className="border-0">
          <Nav className="d-flex justify-content-end align-item-center my-auto">
            <Nav.Link className="text-capitalize mx-0 mx-lg-4">{`${usuario.nombre}`}</Nav.Link>
            <Nav.Link>
              <OverlayTrigger
                placement="left"
                delay={{ show: 150, hide: 150 }}
                overlay={renderTooltip}
              >
                <Link to="/auth" className="text-secondary my-0 py-2">
                  <i className="fas fa-sign-out-alt fa-lg "></i>
                </Link>
              </OverlayTrigger>
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default Header;
