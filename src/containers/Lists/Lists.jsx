import React, { Component } from "react";
import Header from "../../components/Header";
import styles from "../Lists/Lists.module.scss";
import List from "../../components/List";
import { firestore } from "../../firebase";

class Lists extends Component {
  state = {
    searchText: "",
    lists: [],
    filteredLists: [],
    listContent: [],
    filter: "all",
    listFilter: "all",
    addList: [],
    inputTitle: "",
    inputDate: ""
  };

  setSearchText = event => {
    const searchText = event.target.value;
    this.setState({ searchText }, this.filterLists);
  };

  componentDidMount() {
    firestore
      .collection("Lists")
      .get()
      .then(querySnapshot => {
        const lists = querySnapshot.docs.map(doc => {
          return { ...doc.data(), docId: doc.id };
        });
        this.setState({ lists: lists, filteredLists: lists });
      });
  }

  updateFilter = filter => {
    let filteredLists = this.state.lists.filter(list => {
      const listArray = Object.values(list).filter(object => {
        if (typeof object == "string") {
          return object
            .toLowerCase()
            .includes(this.state.searchText.toLowerCase());
        }
        return false;
      });
      return listArray;
    });
    this.setState({ filteredLists });
  };

  submitList = list => {
    const listData = list
      ? {
          title: this.state.inputTitle,
          content: this.state.listContent,
          date: new Date(),
          filter: this.state.listFilter
        }
      : null;

    this.state.listContent && this.state.inputTitle != null
      ? firestore
          .collection("Lists")
          .doc()
          .get(listData)
          .then(
            this.getListFromDataBase(),
            this.setState({ inputTitle: "", listContent: [], inputDate: "" })
          )
          .catch(error => console.error("list didnt submit", error))
      : console.log("required data missing");
  };

  addList = () => {
    this.submitList();
    this.setState({ listFilter: "other", lists: [] });
    this.getListFromDataBase(true);
  };

  render() {
    return (
      <section>
        <Header
          title={`Hello ${this.props.name}, please see your lists`}
          setSearchText={this.setSearchText}
          searchText={this.state.searchText}
        />
        <section>
          {this.state.filteredLists.map(list => (
            <List list={list} key={list.docId} />
          ))}
        </section>
      </section>
    );
  }
}

export default Lists;
