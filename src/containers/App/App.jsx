import React, { Component } from "react";
import styles from "./App.module.scss";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Routes from "../Routes";

class App extends Component {
  state = {};
  render() {
    return <>
    <Routes />
    </>
  }
}

export default App;
