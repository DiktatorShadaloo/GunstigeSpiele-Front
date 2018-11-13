import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <div className="Navbar">
          <Navbar color="dark" dark>
            <NavbarBrand href="/" className="Navbar-brand-text">
              GunstigeSpiele
            </NavbarBrand>
            <form>
              <div className="no-border input-group">
                <input
                  placeholder="Buscar..."
                  type="text"
                  className="form-control"
                />
              </div>
            </form>
          </Navbar>
        </div>
        <div className="App-content" />
      </div>
    );
  }
}

export default App;
