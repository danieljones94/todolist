import React, { Component } from "react";
import styles from "./Header.module.scss";
import SearchBar from "../SearchBar/SearchBar";

class Header extends Component {
  state = {};

  // setSearchText = event => {
  //   this.setState({ searchText: event.target.value });
  // }

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
          {/* <SearchBar
            setSearchText={this.props.setSearchText}
            // searchText={this.props.searchText}
          /> */}
        </div>
      </header>
    );
  }
}

export default Header;
