import React from 'react';
import Toolbar from "../components/Toolbar";
import { Row, Container, Col } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const About = () => (
  <React.Fragment>
    <Toolbar></Toolbar>
    <Breadcrumb>
      <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>Donde estamos</Breadcrumb.Item>
    </Breadcrumb>
    <Container className="mt-5">
      <Row >
        <Col>
          <h1>¿Donde estamos?</h1>
          <p>Av. Las Heras y Av. San Martin, Ciudad de Mendoza.</p>
        </Col>
        <iframe
          title="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.448069356927!2d-68.84046638540143!3d-32.88631968093912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091ed2dd83f7%3A0xf41c7ab7e3522157!2sAv.%20San%20Mart%C3%ADn%20%26%20Av.%20Las%20Heras%2C%20Capital%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1587953985730!5m2!1ses-419!2sar"
          width="100%"
          height="300"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </Row>
    </Container>
  </React.Fragment>
);

export default About;
