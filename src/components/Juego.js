import React, { Component } from "react";
import { Card, Table, Row, Col } from "reactstrap";
import Opcion from "./Opcion";
import "../css/Juego.css";
import cruz from "../cruz.png";

class Juego extends Component {
  constructor(props) {
    super(props);

    this.state = { opciones: [], imagen: "", mensaje: "" };
  }

  componentDidMount() {
    const {
      match: {
        params: { juegoId: id, juegoTitle: title }
      }
    } = this.props;

    const endPoint = `/prices/${id}/${title}`;
    fetch(endPoint)
      .then(res => res.json())
      .then(res => {
        if (res[0].Enable === "UNAVAILABLE") {
          this.setState({
            imagen: res[0].Image,
            mensaje: "NO DISPONIBLE AÚN PARA SU COMPRA"
          });
        }
        const img = res[0].Image;
        res.sort((a, b) => a.CostoConvertido - b.CostoConvertido);
        this.setState({ opciones: res, imagen: img });
      });
  }

  render() {
    const {
      match: {
        params: { juegoId: id, juegoTitle: title }
      }
    } = this.props;

    let key = 0;

    return (
      <Row className="justify-content-center">
        <Col xs="1" />
        <Col xs="10">
          {this.state.mensaje === "" && this.state.opciones.length != 0 ? (
            <Card className="card-juego">
              <div className="d-flex">
                <img src={this.state.imagen} className="juego-img" />
                <h2 className="juego-titulo">{title}</h2>
              </div>
              <Table>
                <thead>
                  <tr>
                    <th>TIENDA</th>
                    <th>PRECIO</th>
                    <th>DISPONIBLE</th>
                    <th>URL</th>
                  </tr>
                </thead>
                {this.state.opciones.map(opc => {
                  key++;
                  return (
                    <Opcion
                      key={key}
                      tienda={opc.Store}
                      costo={opc.Cost}
                      moneda={opc.Currency}
                      disponible={opc.Enable}
                      url={opc.Url}
                      costoConvertido={opc.CostoConvertido}
                    />
                  );
                })}
              </Table>
            </Card>
          ) : (
            <div>
              {this.state.mensaje !== "" ? (
                <Card className="card-juego">
                  <div className="d-flex">
                    <img src={this.state.imagen} className="juego-img" />
                    <h2 className="juego-titulo">{title}</h2>
                  </div>
                  <div
                    className={
                      this.state.mensaje !== "" ? "d-flex juego-mensaje" : ""
                    }
                  >
                    <img src={cruz} className="juego-icono-cruz" />
                    <h4> {this.state.mensaje} </h4>
                  </div>
                </Card>
              ) : null}
            </div>
          )}
        </Col>
        <Col xs="1" />
      </Row>
    );
  }
}

export default Juego;
