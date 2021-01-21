import React from "react";
import axios from "axios";
import ApiHandler from "../api/apiHandler";

class Home extends React.Component {
  state = {
    images: [],
  };

  // call axios au backend a la route qui renvoie toutes les images
  //

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/picture/home")
      .then((pictureDocuments) => {
        console.log("hanane", pictureDocuments);

        this.setState({
          images: pictureDocuments.data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        {this.state.images.map((image) => {
          return (
            <div key={image._id}>
              <img src={image.image} alt="arbre"></img>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
