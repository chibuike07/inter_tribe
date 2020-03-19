import React from "react";

const Input = props => {
  return (
    <input
      name={props.name}
      id={props.id}
      className={props.className}
      placeholder={props.placeholder}
      type={props.type}
      onChange={props.handleChange}
      value={props.value}
    />
  );
};

export default Input;
