import React from "react";

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        {props.children} My name is {props.name} and I'm {props.age} years old!
      </p>
      <input type="text" onChange={props.changed} valur={props.name} />
    </div>
  );
};

export default person;
