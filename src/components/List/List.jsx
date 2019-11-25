import React, { Component } from "react";
import styles from "./List.module.scss";
import { firestore } from "firebase";

class List extends Component {
  state = {};

  deleteList = () => {
    firestore
      .CollectionReference("Lists")
      .doc(this.props.listData.docId)
      .delete()
      .then(() => {
        this.props.getListFromDataBase(true);
      })
      .catch(error => {
        console.error("Couldn't remove list");
      });
  };

  render() {
    return (
      <section>
        <p>{this.props.listData.title}</p>
        <p>{this.props.listData.content}</p>
      </section>
    );
  }
}

export default List;
