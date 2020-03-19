import React from "react";
import { Link } from "react-router-dom";

const Links = props => {
  return (
    <Link
      to={props.nav}
      className={props.className}
      style={{
        color: props.color,
        backgroundColor: props.backgroundColor,
        textDecoration: props.textDecoration
      }}
    >
      {props.text}
    </Link>
  );
};
export default Links;
