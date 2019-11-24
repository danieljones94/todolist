import React, { Component } from "react";

class PrivateRoutes extends Component {
  state = {};
  render() {
    if (!this.props.user) {
      return <p></p>;
    } else {
      return this.props.children;
    }
  }
}

export default PrivateRoutes;
