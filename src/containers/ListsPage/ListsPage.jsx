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
    console.log(this.state.lists);

    firestore
      .collection("Lists")
      .get()
      .then(querySnapshot => {
        const lists = querySnapshot.docs.map(doc => {
          return { ...doc.data(), docId: doc.id };
        });
        this.setState({ lists: lists, filteredLists: lists });
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
    const listData = list
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
            title: this.state.inputTitle,
            content: this.state.listContent,
            date: new Date(),
            filter: this.state.listFilter
          })
          .then(
            this.getListFromDatabase(),
            this.setState({ inputTitle: "", listContent: [], inputDate: "" })
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
        this.setState({
          lists,
          filteredLists: lists
        });
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
            listContent={this.state.listContent}
            getListFromDataBase={this.getListFromDatabase}
            addList={this.addList}
          />
        </section>
      </section>
    );
  }
}

export default ListsPage;
