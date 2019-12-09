import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <input
        type="text"
        onChange={this.props.setSearchText}
        placeholder="Search for a list here"

        // value={this.props.searchText}  placeholder="Search here..."
      />
    );
  }
}

export default SearchBar;
