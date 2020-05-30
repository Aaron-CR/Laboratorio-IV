import React, { Component } from "react";
import Toolbar from "../components/Toolbar";
import DataService from "../services/data.service";
import { Container, Col, Row, Button, Table } from "react-bootstrap";
import ProductModal from "../components/ProductModal";
import Breadcrumb from 'react-bootstrap/Breadcrumb'

class ProductTable extends Component {
    constructor() {
        super();
        this.state = {
            instrumentos: [],
            formModalShow: false,
            instrumento: {
                id: 0,
                instrumento: "",
                descripcion: "",
                marca: "",
                modelo: "",
                precio: 0,
                costoEnvio: "",
                cantidadVendida: 0,
                imagen: "",
            },
        };
        this.refreshTable = this.refreshTable.bind(this);
    }

    componentDidMount() {
        this.refreshTable();
    }

    // Método que refresca la tabla
    refreshTable() {
        this.getAllInstrumentos();
    }

    // Método que obtiene los instrumentos por página
    getAllInstrumentos() {
        DataService.getAll()
            .then((response) => {
                this.setState({
                    instrumentos: response.data,
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }

    // Método que elimina un instrumento (DELETE)
    deleteInstrumento(instrumento) {
        DataService.delete(instrumento.id)
            .then((response) => {
                console.log(response.data);
                this.refreshTable();
            })
            .catch((e) => {
                console.log(e);
            });
    }

    render() {
        let formModalClose = () => {
            // Oculto el modal y regreso el instrumento a estado vacío
            this.setState({
                formModalShow: false,
                instrumento: {
                    id: 0,
                    instrumento: "",
                    descripcion: "",
                    marca: "",
                    modelo: "",
                    precio: 0,
                    costoEnvio: "",
                    cantidadVendida: 0,
                    imagen: "",
                },
            });
        };

        return (
            <React.Fragment>
                <Toolbar></Toolbar>
                <Breadcrumb>
                    <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Tabla</Breadcrumb.Item>
                </Breadcrumb>
                <Container className="container mt-5">
                    <Row>
                        <Col>
                            <h1>Tabla de Instrumentos</h1>
                        </Col>
                        <Col>
                            <Button
                                variant="primary"
                                className="float-right"
                                onClick={() => this.setState({ formModalShow: true })}>
                                Añadir
                            </Button>
                            <ProductModal
                                show={this.state.formModalShow}
                                onHide={formModalClose}
                                instrumento={this.state.instrumento}
                                afterUpdate={this.refreshTable}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Instrumento</th>
                                    <th>Modelo</th>
                                    <th>Precio</th>
                                    <th>Envío</th>
                                    <th>Vendidos</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.instrumentos.map((row, i) => (
                                    <tr key={row.id}>
                                        <td>{row.instrumento}</td>
                                        <td>{row.modelo}</td>
                                        <td>{row.precio}</td>
                                        <td>{row.costoEnvio}</td>
                                        <td>{row.cantidadVendida}</td>
                                        <td>
                                            <Button variant="success" className="mr-2"
                                                onClick={() => {
                                                    this.setState({
                                                        formModalShow: true,
                                                        instrumento: row,
                                                    });
                                                }}>
                                                Editar
                                                </Button>
                                            <Button variant="danger"
                                                onClick={() => {
                                                    if (window.confirm("Seguro deseas eliminar este instrumento?")) {
                                                        this.deleteInstrumento(row);
                                                    }
                                                }}>
                                                Eliminar
                                                </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default ProductTable;