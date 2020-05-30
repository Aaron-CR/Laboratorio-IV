import React, { Component } from "react";
import { Col, Container } from "react-bootstrap";
import DataService from "../services/data.service";
import Toolbar from "../components/Toolbar";
import ProductCard from "../components/ProductCard";
import Breadcrumb from 'react-bootstrap/Breadcrumb'

class ProductList extends Component {
  constructor() {
    super();
    this.state = { instrumentos: [] };
  }
  
  componentDidMount() {
    this.getInstrumentos();
  }

  getInstrumentos() {
    DataService.getAll()
      .then((response) => {
        console.log(response.data);
        this.setState({
          instrumentos: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const instrumentos = this.state.instrumentos.map((instrumento, i) => {
      return (
        <ProductCard
          key={instrumento.id}
          id={instrumento.id}
          nombre={instrumento.instrumento}
          marca={instrumento.marca}
          modelo={instrumento.modelo}
          imagen={instrumento.imagen}
          precio={instrumento.precio}
          costoEnvio={instrumento.costoEnvio}
          cantidadVendida={instrumento.cantidadVendida}
          descripcion={instrumento.descripcion}
        ></ProductCard>
      );
    });
    return (
      <React.Fragment>
        <Toolbar></Toolbar>
        <Breadcrumb>
          <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Productos</Breadcrumb.Item>
        </Breadcrumb>
        <Container className="container mt-5">
          <h1 className="mb-4 ml-3">Listado de productos</h1>
          <Col>{instrumentos}</Col>
        </Container>
      </React.Fragment>
    );
  }
}

export default ProductList;
