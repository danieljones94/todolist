import React, { Component } from "react";
import styles from "./App.module.scss";
import LoginPage from "../LoginPage";

class App extends Component {
  state = {};
  render() {
    return (
      <main>
        <LoginPage />
        {/* <ListsPage /> */}
        {/* <YourList /> */}
      </main>
    );
  }
}

export default App;
