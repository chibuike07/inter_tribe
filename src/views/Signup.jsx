import React, { useState } from "react";
import Button from "../reuseable_component/Button";
import Input from "../reuseable_component/Input";
import Styles from "../styles/Sign_up_styles.module.css";

const userData = {
  name: "chime chibuike princewill",
  email: "princewillchime43@gmail.com",
  password: "HOBBYLUV"
};

function Signup() {
  const [state, setState] = useState(userData);
  const [data, setData] = useState([]);

  const handleChange = ({ target }) => {
    setState(prev => ({ ...prev, [target.name]: [target.value] }));
  };

  const HandleSubmit = e => {
    e.preventDefault();
    setData(prev => [...prev, state]);
    console.log("data", data);
  };

  return (
    <div className={Styles.signupWrapper}>
      <div className={Styles.displayPicture_wrapper}>
        <div className={Styles.displayPicture}>
          <h2>welcome to inter-tribe</h2>
          <p>lets expand the community</p>
          <p>keep in touch with your trib today!</p>
          <p>meet with new people from all over the globe</p>
          <p>create a group chat for you and friends from your tribe</p>
        </div>
      </div>

      <div className={Styles.formWrapper}>
        <div>
          {!!data.length && data.map(item => <p key={item}>{item.name}</p>)}
        </div>
        <form className={Styles.form} onSubmit={HandleSubmit}>
          <Input
            type={"text"}
            name={"name"}
            placeholder={"add your name"}
            handleChange={handleChange}
            value={state.name}
          />
          <Input
            type={"email"}
            name={"email"}
            placeholder={"add your Email"}
            handleChange={handleChange}
            value={state.email}
          />
          <Input
            type={"password"}
            name={"password"}
            placeholder={"add your password"}
            handleChange={handleChange}
            value={state.password}
          />
          <Button
            text={"sign up"}
            color={"#fff"}
            type={"submit"}
            backgroundColor={"rgb(49, 58, 95)"}
          />
        </form>
      </div>
    </div>
  );
}

export default Signup;
