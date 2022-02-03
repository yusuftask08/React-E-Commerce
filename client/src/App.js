import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./components/Pages/Auth/Signin";
import Signup from "./components/Pages/Auth/Singup";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={About} exact />
          <Route path="/sign-in" component={Signin} />
          <Route path="/sign-up" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}


function About() {
  return <h2>About</h2>;
}
