import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ShippingCost from "./ShippingCost";

class ProductCard extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="tarjeta">
          <Card.Body className="body">
            <a href={`product-details/${this.props.id}`}>
              <img
                className="imagen mr-4"
                src={require(`../images/${this.props.imagen}`)}
                alt="Imagen del Producto"
                align="left"
              />
            </a>
            <a href={`product-details/${this.props.id}`}>
              <Card.Title className="title" >{this.props.nombre}</Card.Title>
            </a>
            <Card.Text className="price" >${this.props.precio}</Card.Text>
            <ShippingCost costoEnvio={this.props.costoEnvio}></ShippingCost>
            <Card.Text className="sold mt-2" >{this.props.cantidadVendida} Vendidos</Card.Text>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default ProductCard;
