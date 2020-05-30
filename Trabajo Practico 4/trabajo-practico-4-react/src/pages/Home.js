import React from "react";
import Toolbar from "../components/Toolbar";
import { Row, Container, Col } from "react-bootstrap";

const Home = () => (
  <React.Fragment>
    <Toolbar></Toolbar>
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Musical Hendrix</h1>
          <p>Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de experiencia. Tenemos el
          conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.</p>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Home;
