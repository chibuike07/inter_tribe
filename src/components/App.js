import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/App.css";
import Home from "../views/Home.jsx";
import About from "../views/About.jsx";
import Contact from "../views/Contact.jsx";
import Login from "../views/Login.jsx";
import Signup from "../views/Signup.jsx";
import Dashboard from "../views/Dashboard.jsx";
import { ThemeProvider } from "../helpers/themes/ThemesProvider.helper";
import DefaultHeader from "../components/Layouts/Header.component";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <DefaultHeader />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/contact"} component={Contact} />
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/signup"} component={Signup} />
            <Route exact path={"/dashboard"} component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
