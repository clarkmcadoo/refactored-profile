import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

//Components
import Home from "./Components/Home";
import BaseLayout from "./Components/BaseLayout";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import References from "./Components/References";

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path='/about' component={About}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/contacts' component={Contacts}/>
            <Route path='/references' component={References}/>
            <Route exact path='/' component={Home}/>
          </Switch>
        </BaseLayout>
      </BrowserRouter>

    );
  }
}

export default App;
