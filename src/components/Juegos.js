import React, { Component } from "react";
import {
  ListGroup,
  Card,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col
} from "reactstrap";
import JuegoItem from './JuegoItem';
import "../css/Juegos.css";

class Juegos extends Component {
  constructor(props) {
    super(props);

    this.state = { juegos: [], inputBuscador: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.inputBuscador !== "") {
      const endpoint = `/search/${this.state.inputBuscador}`;
      fetch(endpoint)
        .then(res => res.json())
        .then(juegos => {
          this.setState({ juegos });
        });
    }
  }

  handleInput(event) {
    event.preventDefault();
    this.setState({
      inputBuscador: event.target.value
    });
  }

  render() {
    let key = 0;
    return (
      <Row>
        <Col xs="1" />
        <Col xs="10">
          <Card className="card-juegos">
            <CardTitle>
              <form onSubmit={this.handleSubmit} className="card-buscador">
                <div className="no-border input-group">
                  <input
                    placeholder="Buscar..."
                    type="text"
                    className="form-control"
                    value={this.state.value}
                    onChange={this.handleInput}
                  />
                </div>
                <Button type="submit">Buscar</Button>
              </form>
            </CardTitle>
            {this.state.juegos.length > 0 ? (
              <CardBody>
                <ListGroup>
                  {this.state.juegos.map(juego => {
                    key++;
                    return (
                      <JuegoItem
                        key={key}
                        id={juego.id}
                        img={juego.Image}
                        title={juego.title}
                      />
                    );
                  })}
                </ListGroup>
              </CardBody>
            ) : null }
          </Card>
        </Col>
        <Col xs="1" />
        </Row>
    );
  }
}

export default Juegos;
