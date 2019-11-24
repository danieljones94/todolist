import React, { Component } from "react";
import styles from "./LoginPage.module.scss";
// import firebase, { provider } from "../../firebase";
import Header from "../../components/Header";

class LoginPage extends Component {
  state = {};
  render() {
    return (
      <section>
        <Header title="Please log in to see your to-do lists" />
        <section>
          <button type="button" onClick={this.props.signIn}>
            <span>TO</span>
            <span>DO</span>
          </button>
        </section>
      </section>
    );
  }
}

export default LoginPage;
