import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import Juegos from "./components/Juegos";
import Juego from "./components/Juego";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App-container">
          <div className="Navbar">
            <Navbar color="dark" dark>
              <NavbarBrand href="/" className="Navbar-brand-text">
                GunstigeSpiele
              </NavbarBrand>
            </Navbar>
          </div>
          <div className="App-content">
            <Route exact path="/" component={Juegos} />
            <Route path="/juegos/:juegoId/:juegoTitle" component={Juego} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
