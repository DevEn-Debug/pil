import React, { Component } from "react";
import Login from "./Login";
import Kaizo from "./Kaizo";
//import Register from "./Register";
import { BrowserRouter, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/pil" component={Login} />
        {/* <Route exact path="/register" component={Register} /> */}
        <Route exact path="/pil/kaizo" component={Kaizo} />
      </BrowserRouter>
    );
  }
}

export default App;

