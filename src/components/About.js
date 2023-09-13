import { Component } from "react";

import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Api Call
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => {
              return <h1 className="text-xl font-bold"> {loggedInUser}</h1>;
            }}
          </UserContext.Consumer>
        </div>
        <h2>Namaste React from About Page</h2>
        <h2>Namaste React from About Page</h2>
        <User name={"Akshay (function)"} />
      </div>
    );
  }
}

export default About;
