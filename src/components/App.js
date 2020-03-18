import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/App.css";
import Home from '../views/Home.jsx'
import About from '../views/About.jsx'
import Contact from '../views/Contact.jsx'
import Login from '../views/Login.jsx'
import Signup from '../views/Signup.jsx'
import Dashboard from '../views/Dashboard.jsx'
import { ThemeProvider } from "../helpers/themes/ThemesProvider.helper";

function App() {
  return (
    <ThemeProvider>
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home}></Route>
        <Route exact path={"/about"} component={About}></Route>
        <Route exact exact path={"/contact"} component={Contact}></Route>
        <Route exact path={"/login"} component={Login}></Route>
        <Route exact path={"/signup"} component={Signup}></Route>
        <Route exact path={"/dashboard"} component={Dashboard}></Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
