import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = () => {
  const [value, setChange] = useState({
    persons: [
      { name: "Max", age: 18 },
      { name: "manu", age: 24 },
      { name: "stephinie", age: 28 },
    ],
  });

  //eslint-disable-next-line
  const [a, b] = useState("some other value");

  const switchNameHandler = () => {
    setChange({
      persons: [
        { name: "Maximilian", age: 18 },
        { name: "manu", age: 24 },
        { name: "stephinie", age: 30 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button onClick={switchNameHandler}>change name</button>
      <Person name={value.persons[0].name} age={value.persons[0].age}>
        1.
      </Person>
      <Person name={value.persons[1].name} age={value.persons[1].age}>
        2.
      </Person>
      <Person name={value.persons[2].name} age={value.persons[2].age}>
        3.
      </Person>
    </div>
  );
};

export default App;
