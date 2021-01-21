// import React from "react";
// import ApiHandler from "../../api/apiHandler";
// import { withRouter } from "react-router-dom";
// import { buildFormData } from "../../../src/utils";

// // import axios from "axios";

// //const api = new ApiHandler();
import React from "react";
import ApiHandler from "../../api/apiHandler";
import { withRouter } from "react-router-dom";
import { buildFormData } from "../../../src/utils";
import "../../styles/Signin.css";
import Title from "../../components/Title";

class FormPicture extends React.Component {
  state = {
    image: "",
    description: "",
  };

  imageRef = React.createRef();

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.files
      ? event.target.files[0]
      : event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData();
    const { httpResponse, ...data } = this.state;

    fd.append("description", this.state.description);
    fd.append("image", this.state.image);

    ApiHandler.addPicture(fd)

      .then((apiResponse) => {
        this.props.history.push("/profile");
        console.log(apiResponse);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Title />
        <div className="form-signin">
          <div className="form-sign">
            <div className="div-sign">
              <h1>Add picture </h1>
              <form onSubmit={this.handleSubmit}>
                <div className="signin-container">
                  <label htmlFor="">upload your image</label>
                  <input
                    onChange={this.handleChange}
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    placeholder="Description"
                  />
                </div>
                <div className="signin-container">
                  <label htmlFor="description"></label>
                  <input
                    type="text"
                    name="description"
                    onChange={this.handleChange}
                    value={this.state.description}
                    placeholder="Description"
                  />
                </div>
                <div className="signin-container"></div>
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

export default withRouter(FormPicture);
