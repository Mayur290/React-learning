import React, { Component } from "react";
import "./App.css";
const UserInput = (props) => {
  return (
    <div>
      <input
        className="inp"
        type="text"
        onChange={props.change}
        value={props.val}
      />
    </div>
  );
};

const UserOutput = (props) => {
  return (
    <div className="oup">
      <p>{props.username}</p>
      <p>{props.name}</p>
    </div>
  );
};

class App extends Component {
  state = {
    username: "mayur B",
  };
  changeParaHandeler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    const style = {
      backgroundColor: "grey",
    };
    return (
      <div className="App" style={style}>
        <UserInput change={this.changeParaHandeler} val={this.state.username} />
        <UserOutput username={this.state.username} name="mb" />
      </div>
    );
  }
}

export default App;
