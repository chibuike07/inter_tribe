import React from "react";

const Button = props => {
  return (
    <button
      onClick={props.click}
      type={props.type}
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
