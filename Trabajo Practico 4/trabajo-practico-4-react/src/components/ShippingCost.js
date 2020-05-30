import React, { Component } from "react";

class ShippingCost extends Component {
  render() {

    if (this.props.costoEnvio === "G") {
      this.shipping = (
        <span className="free-shipping">
          <img
            src={require(`../images/camion.png`)}
            alt="envio gratis"
          ></img>
          Envío gratis a todo el País
        </span>
      );
    } else {
      this.shipping = (
        <span className="shipping-cost">
          Costo de Envío Interior de Argentina: ${this.props.costoEnvio}
        </span>
      );
    }

    return (
      <div>
       {this.shipping}
      </div>
    );
  }
}

export default ShippingCost;
