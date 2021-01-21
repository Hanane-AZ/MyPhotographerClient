import React, { Component } from "react";
import FormPicture from "../components/Forms/FormPicture";
import apiHandler from "../api/apiHandler";
import { UserContext } from "../components/Auth/UserContext";
import { withRouter } from "react-router-dom";

class Profile extends Component {
  static contextType = UserContext;
  state = {
    pictures: [],
  };

  componentDidMount() {
    // axios
    //   .get("http://localhost:4000/api/picture/myphotos")
    //   .then((pictureDocuments) => {
    //     console.log("hanane",pictureDocuments);

    //     this.setState({
    //       images :pictureDocuments.data,

    //     });
    //   })
    //   .catch(error => console.log(error))
    apiHandler.getUserPictures().then((data) => {
      console.log(data);
      this.setState({ pictures: data });
    });
  }

  handleDelete = (pictureId) => {
    apiHandler.removePicture(pictureId).then((data) => {
      // this.setState(data);
      console.log("-------------------->>>>>");
      console.log(this.state.pictures);
      console.log(data);
      // console.log("deleted");
    });
  };

  render() {
    const { pictures } = this.state;
    console.log(pictures);
    return (
      <div key={pictures._id}>
        <h1>Welcome {this.context.user.userName}</h1>
        {pictures.map((picture) => {
          return (
            <div key={picture._id}>
              <img src={picture.image} alt="description" />
              <p>{picture.description}</p>
              <button onClick={() => this.handleDelete(picture._id)}>
                {" "}
                delete
              </button>
            </div>
          );
        })}
        {/* {pictures.map((picture) => {
          return <p src={picture.description}></p>;
        })} */}
      </div>
    );
  }
}

export default withRouter(Profile);
