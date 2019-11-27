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
    let list = this.state.lists;
    list = list.filter(item => {
      return (
        item.content.toLowerCase().search(event.target.value.toLowerCase()) !==
        -1
      );
    });
    this.setState({ list: list, lists: list });
    console.log(list);
  };

  componentDidMount() {
    firestore
      .collection("Lists")
      .get()
      .then(querySnapshot => {
        const lists = querySnapshot.docs.map(doc => {
          return { ...doc.data(), docId: doc.id };
        });
        this.setState({ lists, filteredLists: lists });
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

  submitContent = () => {
    const data = {
      title: this.state.inputTitle,
      content: this.state.listContent,
      date: new Date(),
      filter: this.state.listFilter
    };

    if (this.state.inputTitle === "hello") {
      console.log("hello");
    } else {
      console.log("success");
      console.log(this.state.lists.title);
      firestore
        .collection("Lists")
        .add(data)
        .then(
          this.getListFromDatabase(),
          this.setState({ inputTitle: "", listContent: "", inputDate: "" })
        )
        .catch(error => console.error("list didnt submit", error));
    }
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
            filteredLists={this.state.filteredLists}
          />
        </section>
      </section>
    );
  }
}

export default ListsPage;
