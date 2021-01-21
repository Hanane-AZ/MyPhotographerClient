import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";

import "../styles/NavMain.css";

const NavMain = (props) => {
  const { context } = props;

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="nav">
      <nav className="NavMain">
        <NavLink exact to="/"></NavLink>
        <ul className="nav-list">
          {context.isLoggedIn && (
            <React.Fragment>
              {/* <li>
                <NavLink to="/create">Add</NavLink>
              </li> */}

              <div className="DisplayNav">
                <NavLink exact to="/">
                  <img
                    className="home"
                    src="https://res.cloudinary.com/dx7ahhk3r/image/upload/v1611091672/house_mjpd2b.png"
                    alt="home"
                  ></img>
                </NavLink>

                <img
                  className="home"
                  src="https://res.cloudinary.com/dx7ahhk3r/image/upload/v1611091748/envelope_1_syhefp.png"
                  alt="home"
                ></img>

                <img
                  className="home"
                  src="https://res.cloudinary.com/dx7ahhk3r/image/upload/v1611091687/magnifying-glass_vfkage.png"
                  alt="home"
                ></img>

                <li>
                  <NavLink to="/profile">
                    <img
                      className="home"
                      src="https://res.cloudinary.com/dx7ahhk3r/image/upload/v1611091653/avatar_c1n0sl.png"
                      alt="home"
                    ></img>
                  </NavLink>
                </li>
              </div>
              {/* <li>
                <p onClick={handleLogout}>Logout</p>
              </li> */}
            </React.Fragment>
          )}
          {!context.isLoggedIn && (
            <React.Fragment>
              <li>
                <NavLink to="/signin">Log in</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Create account</NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default withUser(NavMain);
