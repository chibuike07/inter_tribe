import React from "react";
import Style from "../styles/Login_styles.module.css";
import Links from "../reuseable_component/Links";
import Input from "../reuseable_component/Input";
function Login() {
  return (
    <div>
      <div className={Style.container_wrapper}>
        <form className={Style.form}>
          <Input name={"email"} type={"email"} placeholder={"coming"} />
          <Input
            name={"password"}
            type={"password"}
            placeholder={"Add Password"}
          />
          <p style={{ color: "red" }}>
            Not yet a member <Links text={"sign up here"} nav={"/signup"} />
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
