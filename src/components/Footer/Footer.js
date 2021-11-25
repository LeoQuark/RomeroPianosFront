import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav>
            <p className="copyright text-center text-xs text-muted">
              © {new Date().getFullYear()}{" "}
              <a href="http://www.creative-tim.com" className="text-muted">
                Creative Tim
              </a>
              , made with love for a better web
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
