import React, { Component } from "react";
import Header from "../../components/Header";
import styles from "../Lists/Lists.module.scss";
import Lists from "../Lists";
import { firestore } from "../../firebase";

class ListsPage extends Component {
  state = {
    searchText: "",
    lists: [],
    filteredLists: [],
    listContent: "",
    filter: "all",
    listFilter: "all",
    addList: [],
    inputTitle: "",
    inputDate: ""
  };
  setSearchText = event => {
    const searchText = event.target.value;
    this.setState({ searchText }, this.getListFromDatabase);
  };

  componentDidMount() {
    console.log(this.state.lists);

    firestore
      .collection("Lists")
      .get()
      .then(querySnapshot => {
        const lists = querySnapshot.docs.map(doc => {
          return { ...doc.data(), docId: doc.id };
        });
      });
    this.getListFromDatabase();
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

  submitContent = list => {
    const data = list
      ? {
          title: this.state.inputTitle,
          content: this.state.listContent,
          date: new Date(),
          filter: this.state.listFilter
        }
      : null;

    this.state.inputTitle != null
      ? firestore
          .collection("Lists")
          .doc()
          .set({
            data
          })
          .then(
            this.getListFromDatabase(),
            this.setState({ inputTitle: "", listContent: "", inputDate: "" })
          )
          .catch(error => console.error("list didnt submit", error))
      : console.log("required data missing");
  };

  getListFromDatabase = () => {
    firestore
      .collection("Lists")
      .get()
      .then(querySnapshot => {
        let lists = querySnapshot.docs.map(doc => {
          const data = {
            ...doc.data(),
            docId: doc.id
          };
          return data;
        });
        let filteredLists = lists.filter(list => list.filter === "all");
        let searchForFilteredLists = filteredLists.filter(list =>
          list.title.toLowerCase().includes(this.state.searchText.toLowerCase())
        );
        this.setState({ lists: lists, filteredLists: searchForFilteredLists });
      });
  };

  addList = () => {
    this.submitContent();
    this.setState({ listFilter: "other" });
    this.getListFromDatabase(true);
    console.log("click");
  };

  setInputTitle = inputTitle => {
    this.setState({ inputTitle });
  };

  setInputDate = inputDate => {
    this.setState({ inputDate });
  };

  setInputContent = listContent => {
    this.setState({ listContent });
  };

  render() {
    console.log(this.state.lists);
    return (
      <section>
        <Header
          title={`Hello ${this.props.name}, please see your lists`}
          setSearchText={this.setSearchText}
          searchText={this.state.searchText}
        />
        <section>
          <Lists
            setTitle={this.setInputTitle}
            lists={this.state.lists}
            setDate={this.setInputDate}
            setContent={this.setInputContent}
            listContent={this.state.listContent}
            getListFromDatabase={this.getListFromDatabase}
            addList={this.addList}
            user={this.props.user}
          />
        </section>
      </section>
    );
  }
}

export default ListsPage;
