import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";

import UsersForm from "../Userform";
import UserList from "../Userlist";
import { connect } from "react-redux";
import { LogoutUser } from "../authActions";

// import { Route, BrowserRouter, Switch } from "react-router-dom";

class Use extends Component {
  handleAddUser = (newUser) => {
    newUser.id = Math.random().toString();
    this.setState({
      users: [...this.state.users, newUser],
    });
  };

  handleDeleteUser = (userId) => {
    const savedusers = this.state.users.filter((user) => {
      return user.id !== userId;
    });
    this.setState({ users: savedusers });
  };

  handleEditUser = (updatedUser) => {
    this.setState({
      users: this.state.users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      ),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.props.LogoutUser}>Log Out</button>
        <UsersForm addUser={this.handleAddUser} />
        <UserList />
      </div>
    );
  }
}

const mDTP = {
  LogoutUser,
};

export default connect(null, mDTP)(Use);
