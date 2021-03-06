import React, { Component } from "react";
import fire from "../config/config";
import Login from "../containers/Login";
import UserTodos from "../containers/userTodos";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      login: false
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      // console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.setItem('user',user.uid)
      } else {
        this.setState({ user: null });
        // localStorage.removeItem(user);
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.user && this.state.user ? <UserTodos /> : <Login />}
      </div>
    );

    // return <Main />;
  }
}
