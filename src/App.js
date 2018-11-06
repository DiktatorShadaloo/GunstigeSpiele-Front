import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App-container">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <body>

        </body> */}
        <div className="App-container">
          <div className="App-header">
              <span className="App-header-logo-default" />
          </div>
          <div className="App-content">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
