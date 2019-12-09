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
<<<<<<< HEAD
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
=======
      <section className={styles.listContainer}>
        <p className={styles.title}>{this.props.data.title}</p>
        <p className={styles.listItem}>{this.props.data.content}</p>
        <button className={styles.button} onClick={this.deleteList}>
          Delete
        </button>
      </section>
>>>>>>> d10b0339b9d42f7c191e2f0a577805fd7bfa38ba
    );
  }
}

export default List;
