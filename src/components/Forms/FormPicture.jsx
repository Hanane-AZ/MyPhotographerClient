import React from "react";
import ApiHandler from "../../api/apiHandler";
import {withRouter} from "react-router-dom";


// import axios from "axios";

//const api = new ApiHandler();

class FormPicture extends React.Component {
    state = {
      image: "",
    };
  
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        ApiHandler.addPicture({
            image:this.state.image
        })

        .then((apiResponse) => {
            console.log(apiResponse);
          })
          .catch((err) => {
            console.log(err);
          });
        
        }
    
        render() {
return(
    <form onSubmit={this.handleSubmit}>
<div>
    <label htmlFor="">upload your image</label>
    <input 
    onChange={this.handleChange}
    type="file"
    name="image"
    />

</div>
<button>Submit</button>
    </form>
)
}
}

export default FormPicture;
