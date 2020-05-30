import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Toolbar extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="primary" variant="dark" expand="lg">
                    <Navbar.Brand href="/home">Hendrix</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/about">Donde Estamos</Nav.Link>
                            <Nav.Link href="/product-list">Productos</Nav.Link>
                            <Nav.Link href="/product-table">Tabla</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Toolbar;
