import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import "./Person/Person.css";
class App extends Component {
  state = {
    persons: [
      { id: "agh", name: "Max", age: 18 },
      { id: "jak", name: "manu", age: 24 },
      { id: "ian", name: "stephinie", age: 28 },
    ],
    otherState: "some other state",
    showPersons: false,
  };

  namechangeHandeler = (event, id) => {
    const PersonIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[PersonIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[PersonIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (PersonIndex) => {
    const persons = [...this.state.persons];
    persons.splice(PersonIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "blue",
      color: "white",
      fontSize: "16px",
      fontWidth: "10px",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={p.name}
                age={p.age}
                key={p.id}
                changed={(event) => this.namechangeHandeler(event, p.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
