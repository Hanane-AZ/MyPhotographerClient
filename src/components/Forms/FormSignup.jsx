import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { UserContext } from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
import "../../styles/Signin.css";
import Title from "../../components/Title";

class FormSignup extends Component {
  static contextType = UserContext;

  state = {
    email: "",
    password: "",
    userName: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signup(this.state)
      .then((data) => {
        this.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.context.user) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <Title />
        <div className="form-signin">
          <div className="form-sign">
            <div className="div-sign">
              <h1>Sign up </h1>
              <form onSubmit={this.handleSubmit}>
                <div className="signin-container">
                  <label htmlFor="email"></label>
                  <input
                    onChange={this.handleChange}
                    value={this.state.email}
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" email"
                  />
                </div>
                <div className="signin-container">
                  <label htmlFor="password"></label>
                  <input
                    onChange={this.handleChange}
                    value={this.state.password}
                    type="password"
                    id="password"
                    name="password"
                    placeholder=" password"
                  />
                </div>
                <div className="signin-container">
                  <label htmlFor="password"></label>
                  <input
                    onChange={this.handleChange}
                    value={this.state.userName}
                    type="text"
                    id="userName"
                    name="userName"
                    placeholder=" userName"
                  />
                </div>
                <div className="signin-container">
                  <button className="btn-signin">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FormSignup);
