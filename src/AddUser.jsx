import React, { Component } from "react";
import "./userform.css";
import { AddAction, getALLcontact } from "../AddAction/AddAction";
import { connect } from "react-redux";
class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contact: "",
      location: "",
    };
  }
  componentDidMount() {
    this.props.getALLuser();
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.NewUser(this.state);
    this.setState({
      name: "",
      user: "",
      location: "",
    });
  };

  render() {
    return (
      <form className="class-form" onSubmit={this.handleSubmit}>
        <h4>Crud UsersForm</h4>
        FirstName: <br />
        <input
          className="form_input"
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder={this.props.name}
          required
        />
        <br />
        User: <br />
        <input
          className="form_input"
          type="number"
          name="user"
          value={this.state.user}
          onChange={this.handleChange}
          required
        />
        <br />
        Location: <br />
        <input
          className="form_input"
          name="location"
          type="text"
          value={this.state.location}
          onChange={this.handleChange}
          placeholder={this.props.location}
          required
        />
        <br />
        <input className="form_button" type="submit" value="Submit" />
      </form>
    );
  }
}
const mapDispatchToProps = {
  NewUser: AddAction,
  getALLuser: getALLuser,
};

export default connect(null, mapDispatchToProps)(AddUser);
