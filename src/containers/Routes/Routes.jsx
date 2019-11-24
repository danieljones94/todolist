import React, { Component } from "react";
import Lists from "../Lists";
import LoginPage from "../LoginPage";
import firebase, { provider } from "../../firebase";
import { Router, globalHistory } from "@reach/router";
import PrivateRoutes from "../../components/PrivateRoutes";

class Routes extends Component {
  state = { user: null };

  signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        this.setState({ user });
        globalHistory.navigate("/private/lists");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Router>
        <LoginPage path="/loginpage" signIn={this.signIn} />
        <PrivateRoutes path="private" user={this.state.user}>
          <Lists path="/lists" />
        </PrivateRoutes>
      </Router>
    );
  }
}

export default Routes;
