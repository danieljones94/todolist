import React, { Component } from "react";
import styles from "./List.module.scss";

class List extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>{this.props.list.title}</p>
        <p>{this.props.list.listContent}</p>
      </div>
    );
  }
}

export default List;
