import React, { Component } from "react";
import Title from "../../components/Title";
import { UserContext } from "../Auth/UserContext";
import { withRouter, Redirect } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import "../../styles/Signin.css";
import "../../styles/global.css";

class FormSignin extends Component {
  static contextType = UserContext;

  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signin(this.state)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
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
              <h1>Sign in </h1>
              <form
                className="sign-style"
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
              >
                <div className="signin-container">
                  <label htmlFor="email"></label>
                  <input
                    placeholder=" email"
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="signin-container">
                  <label htmlFor="password"></label>
                  <input
                    placeholder="password"
                    type="password"
                    id="password"
                    name="password"
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

export default withRouter(FormSignin);
