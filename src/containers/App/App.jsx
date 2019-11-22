import React, { Component } from "react";
import styles from "./App.module.scss";
import Lists from "../Lists";

class App extends Component {
  state = {};
  render() {
    return (
      <main>
        <Lists />
      </main>
    );
  }
}

export default App;
