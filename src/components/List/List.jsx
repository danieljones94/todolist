import React, { Component } from "react";
import styles from "./List.module.scss";
import { firestore } from "../../firebase";

class List extends Component {
  state = {};

  deleteList = () => {
    if (this.props.user.uid) {
      firestore
        .collection("Lists")
        .doc(this.props.data.docId)
        .delete()
        .then(() => {
          this.props.getListFromDatabase(true);
        })
        .catch(error => {
          console.error("Couldn't remove list", error);
        });
    } else {
      alert("You can't delete this list");
    }
    // console.log(this.props.user);
  };

  render() {
    return (
      <section>
        <p>{this.props.data.title}</p>
        <p>{this.props.data.content}</p>
        <button onClick={this.deleteList}>Delete</button>
      </section>
    );
  }
}

export default List;
