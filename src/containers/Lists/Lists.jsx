import React, { Component } from 'react';
import firebase, { provider } from "../../firebase";
import styles from "../Lists/Lists.module.scss";

class Lists extends Component {
    state = { user: null, name: "" }

    signIn = () => {
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => {
            const user = result.user;
            this.setState({
              user,
            });
          })
          .catch(error => {
            console.log(error);
          });
      };
    render() { 
        return (  );
    }
}


export default Lists ;