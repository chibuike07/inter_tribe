import React from "react";
import { Link } from "react-router-dom";

const Links = props => {
  return (
    <Link
      to={props.nav}
      className={props.className}
      color={props.color}
      backgroundColor={props.backgroundColor}
    >
      {props.text}
    </Link>
  );
};
export default Links;
