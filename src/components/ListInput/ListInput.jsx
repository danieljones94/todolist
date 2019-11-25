import React, { Component } from "react";

class ListInput extends Component {
  state = {};
  render() {
    return (
      <article>
        <p>{this.props.inputTitle}</p>
        <ul>{this.props.listContent}</ul>
      </article>
    );
  }
}

export default ListInput;
