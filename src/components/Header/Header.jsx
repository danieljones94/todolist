import React, { Component } from "react";
import styles from "./Header.module.scss";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className={styles.headerContainer}>
        <div>
          <p className={styles.todo}>TO</p>
          <p className={styles.todo}>DO</p>
        </div>
        <div>
          <h1 className={styles.title}>{this.props.title}</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search here..."
            className={styles.searchBar}
          ></input>
        </div>
      </header>
    );
  }
}

export default Header;
