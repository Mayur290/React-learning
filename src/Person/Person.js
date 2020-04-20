import React from "react";

const person = (props) => {
  return (
    <div>
      <p>
        {props.children} My name is {props.name} and I'm {props.age} years old!
      </p>
    </div>
  );
};

export default person;
