import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Row, Col } from "reactstrap";
import "./App.css";
import Juegos from "./components/Juegos";
import Juego from "./components/Juego";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App-container">
          <div className="App-content">
            <Row>
              <Col xs="2" />
              <Col xs="8" className="app-titulo">
                <div className="d-flex">
                  <a href="/" className="titulo-Gunstige">
                    GUNSTIGE
                  </a>
                  <a href="/" className="titulo-Spiele">
                    SPIELE
                  </a>
                </div>
              </Col>
              <Col xs="2" />
            </Row>
            <Route exact path="/" component={Juegos} />
            <Route path="/juegos/:juegoId/:juegoTitle" component={Juego} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
