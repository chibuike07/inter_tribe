import React from "react";
import Links from "../reuseable_component/Links";
import Button from "../reuseable_component/Button";
import Input from "../reuseable_component/Input";
import Styles from "../styles/Sign_up_styles.module.css";
function Signup() {
  return (
    <div className={Styles.signupWrapper}>
      <div className={Styles.displayPicture}>
        <h2>welcome to inter-tribe</h2>
        <p>lets expand the community</p>
        <p>keep in touch with your trib today!</p>
        <p>meet with new people from all over the globe</p>
        <p>create a group chat for you and friends from your tribe</p>
      </div>
      <div className={Styles.formWrapper}>
        <form className={Styles.form}>
          <Input type={"text"} name={"name"} placeholder={"add your name"} />
          <Input type={"email"} name={"email"} placeholder={"add your Email"} />
          <Input
            type={"password"}
            name={"password"}
            placeholder={"add your password"}
          />
          <Links
            nav={"/login"}
            text={
              <Button
                text={"sign up"}
                backgroundColor={"rgb(49, 58, 95)"}
                color={"#fff"}
              />
            }
          />
        </form>
      </div>
    </div>
  );
}

export default Signup;
