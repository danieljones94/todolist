import React, { Component } from "react";
import styles from "./ListInput.module.scss";

class ListInput extends Component {
  state = { inputTitle: "", inputDate: "", inputContent: "" };

  setTitle = event => {
    const inputTitle = event.target.value;
    this.setState({ inputTitle });
    this.props.setTitle(inputTitle);
  };

  setDate = event => {
    const inputDate = event.target.value;
    this.setState({ inputDate });
    this.props.setDate(inputDate);
  };

  setContent = event => {
    const inputContent = event.target.value;
    this.setState({ inputContent });
    this.props.setContent(inputContent);
  };

  render() {
    return (
      <section className={styles.inputs}>
        <label for="title">Title</label>
        <input type="text" id="title" onChange={this.setTitle} />
        <label for="content">Item</label>
        <input type="text" id="content" onChange={this.setContent} />
        <label for="date">Date</label>
        <input type="date" id="date" onChange={this.setDate} />
        <button onClick={this.props.addList}>Add list</button>
      </section>
    );
  }
}

export default ListInput;
