import React, { Component } from "react";

class ListInput extends Component {
  state = { inputTitle: "", inputDate: "" };

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

  render() {
    return (
      <section>
        <label for="title">Title</label>
        <input type="text" id="title" onChange={this.setTitle} />
        <label for="date">Date</label>
        <input type="date" id="date" onChange={this.setDate} />
        <button onClick={this.props.addList}>Add list</button>
      </section>
    );
  }
}

export default ListInput;
