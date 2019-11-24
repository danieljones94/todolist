import React, { Component } from "react";
import Header from "../../components/Header";
import styles from "../Lists/Lists.module.scss";

class Lists extends Component {
  state = { user: null, name: "" };

  render() {
    return (
      <section>
        <Header title="Your lists" />
      </section>
    );
  }
}

export default Lists;
