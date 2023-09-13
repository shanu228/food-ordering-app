import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.timer = setInterval(() => {}, 1000);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count === prevState.count) {
      //code
    }
    if (this.state.count2 === prevState.count2) {
      //code
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // debugger;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshay27</h4>
      </div>
    );
  }
}

export default UserClass;

/**
 *  ----MOUNTING-----
 *
 * Constructor (dummy)
 * Render (dummy)
 *     <HTML Dummy>
 * Component Did Mount
 *     <API Call>
 *     <this.setState> -> State variable is updated
 *
 * UPDATE
 *
 *    render(API data)
 *    <HTML (new API data)>
 *    componentDid Update
 */
