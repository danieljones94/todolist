import React, { Component } from "react";
import Header from "../../components/Header";
import styles from "../Lists/Lists.module.scss";
import List from "../../components/List";
import ListInput from "../../components/ListInput";

class Lists extends Component {
  state = {};
  render() {
    console.log(this.state.inputTitle);
    return (
      <section>
        <ListInput
          setTitle={this.props.setTitle}
          setDate={this.props.setDate}
          lists={this.props.lists}
          setContent={this.props.setContent}
          inputHeader="Create a new list"
          listFilter={this.props.listFilter}
          updateFilter={this.props.updateFilter}
          addList={this.props.addList}
        />
        <section>
          {this.props.lists.map((list, docId) => (
            <List
              data={list}
              key={docId}
              getListFromDatabase={this.props.getListFromDatabase}
              user={this.props.user}
            />
          ))}
        </section>
      </section>
    );
  }
}
export default Lists;
