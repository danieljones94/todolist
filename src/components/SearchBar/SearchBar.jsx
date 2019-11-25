import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <input
        type="text"
        onChange={this.props.setSearchText}
        placeholder="Search here..."
        value={this.props.searchText}
      />
    );
  }
}

export default SearchBar;
