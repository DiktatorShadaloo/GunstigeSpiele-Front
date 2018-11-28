import React, { Component } from "react";
import { Card, CardBody, CardTitle, Table, Row, Col } from "reactstrap";
import Opcion from "./Opcion";
import "../css/Juego.css";

class Juego extends Component {
  constructor(props) {
    super(props);

    this.state = { opciones: [], mensaje: "" };
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
        if (res.Enable === "UNAVAILABLE")
          throw Error("Este juego no esta disponible");
        this.setState({ opciones: res });
      })
      .catch(e => {
        this.setState({ mensaje: e.message });
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
        <Col xs="2" />
        <Col xs="8">
          <Card className="card-juego">
            <h2 className="juego-titulo">
              {title}
            </h2>
            {/* <CardBody> */}
              {this.state.mensaje === "" && this.state.opciones.length != 0 ? (
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
              ) : (
                <h3 className="juego-mensaje"> {this.state.mensaje} </h3>
              )}
            {/* </CardBody> */}
          </Card>
        </Col>
        <Col xs="2" />
      </Row>
    );
  }
}

export default Juego;
