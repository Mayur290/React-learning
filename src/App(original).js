import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 18 },
      { name: "manu", age: 24 },
      { name: "stephinie", age: 28 },
    ],
    otherState: "some other state",
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Maximilian", age: 18 },
        { name: "manu", age: 24 },
        { name: "stephinie", age: 30 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button onClick={this.switchNameHandler}>change name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          1.
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          2.
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          3.
        </Person>
      </div>
    );
  }
}

export default App;