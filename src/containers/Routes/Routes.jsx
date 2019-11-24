import React, { Component } from "react";
import Lists from "../Lists";
import LoginPage from "../LoginPage";
import firebase, { provider } from "../../firebase";
import { Router, globalHistory } from "@reach/router";
import PrivateRoutes from "../../components/PrivateRoutes";

class Routes extends Component {
  state = { user: null, name: "" };

  signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        const name = result.user.displayName; 
        this.setState({ user, name});
        globalHistory.navigate("/private/lists");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Router>
        <LoginPage path="/" signIn={this.signIn}/>
        <PrivateRoutes path="private" user={this.state.user} name={this.state.name}>
          <Lists path="/lists"  name={this.state.name}/>
        </PrivateRoutes>
      </Router>
    );
  }
}

export default Routes;