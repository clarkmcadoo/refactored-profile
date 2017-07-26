import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

//Components
import Home from "./Components/Home";
import BaseLayout from "./Components/BaseLayout";
import Profile from "./Components/Profile";
import About from "./Components/About";

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/profile' component={Profile}/>
          </Switch>
        </BaseLayout>
      </BrowserRouter>

    );
  }
}

export default App;
