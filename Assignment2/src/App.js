import React, { Component } from "react";
import "./App.css";

const ValidationComponent = (props) => {
  if (props.length === 0) return <p></p>;
  if (props.length >= 5) return <p>Text long enough!</p>;
  else return <p>Text too short!</p>;
};

const CharComponent = (props) => {
  return (
    <div className="card" onClick={props.del}>
      {props.st}
    </div>
  );
};

class App extends Component {
  state = {
    value: "",
  };

  cardDeleteHandeler = (index) => {
    const values = this.state.value.split("");

    values.splice(index, 1);
    const newVal = values.join("");
    this.setState({ value: newVal });
  };

  valueChangeHandeler = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.valueChangeHandeler}
          placeholder="enter something.."
          value={this.state.value}
        />

        <ValidationComponent length={this.state.value.length} />
        {this.state.value.split("").map((val, index) => {
          return (
            <CharComponent
              st={val}
              key={index}
              del={() => this.cardDeleteHandeler(index)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
