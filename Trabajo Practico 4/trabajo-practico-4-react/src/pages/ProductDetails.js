import React, { Component } from "react";
import { instrumentos } from "../data/instrumentos.json";
import Toolbar from "../components/Toolbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import ShippingCost from '../components/ShippingCost'

class ProductDetails extends Component {

  constructor() {
    super();
    this.state = { instrumentos };
  }

  render() {
    const id = this.props.match.params.id;
    const instrumento = instrumentos.filter(
      (instrumento) => instrumento.id === id
    )[0];

    return (
      <React.Fragment>
        <Toolbar></Toolbar>
        <Breadcrumb>
          <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/product-list">Productos</Breadcrumb.Item>
          <Breadcrumb.Item active>{instrumento.instrumento}</Breadcrumb.Item>
        </Breadcrumb>
        <Container className="container mt-5">
          <Row>
            <Col>
              <img
                src={require(`../images/${instrumento.imagen}`)}
                alt="Imagen producto"
                className="img-details"
              ></img>
              <div className="descripcion">
                <h5>Descipción</h5>
                <p>{instrumento.descripcion}</p>
              </div>
            </Col>
            <Col >
              <p className="sold">
                {instrumento.cantidadVendida} vendidos
              </p>
              <h3>{instrumento.instrumento}</h3>
              <h2 className="price-details">${instrumento.precio}</h2>
              <br></br>
              <h6 className="font-weight-bold">Marca: {instrumento.marca}</h6>
              <h6 className="font-weight-bold">Modelo: {instrumento.modelo}</h6>
              <p className="mt-5">Costo envío:</p>
              <ShippingCost costoEnvio={instrumento.costoEnvio}></ShippingCost>
              <br></br>
              <button className="btn btn-outline-primary">Agregar al carrito</button>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
