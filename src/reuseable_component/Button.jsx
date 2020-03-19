import React from "react";

const Button = props => {
  return (
    <button
      style={{
        color: props.color,
        backgroundColor: props.backgroundColor,
        className: props.className
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
