import React, { Component } from "react";
import styles from "./List.module.scss";
import { firestore } from "../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

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
      <article className={styles.listContainer}>
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={this.deleteList}
          className={styles.deleteButton}
        ></FontAwesomeIcon>
        <p className={styles.listTitle}>{this.props.data.title}</p>
        <ul>
          <li>{this.props.data.content}</li>
        </ul>
      </article>
    );
  }
}

export default List;
