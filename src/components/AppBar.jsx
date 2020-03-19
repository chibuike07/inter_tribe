import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "10vh",
        width: "100%",
        position: "absolute",
        left: "5%",
        top: "20%",
        transform: "translate(-6%, -15%)"
      }}
    >
      <header
        style={{
          zIndex: "3",
          marginLeft: "10%",
          backgroundColor: "rgb(34, 196, 243)",
          margin: "auto",
          width: "70%",
          height: "5vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <Link
          to="/about"
          style={{
            color: "#fff",
            marginLeft: "5%",
            textDecoration: "none"
          }}
        >
          About
        </Link>
        <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>
          Contact
        </Link>
      </header>
    </div>
  );
};
export default Header;
