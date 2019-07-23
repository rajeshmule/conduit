import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import { Home } from './components/Home';
import { Setting } from './components/Setting';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Newpost } from './components/Newpost';
import { Article } from './components/Article';


class App extends Component {
  
  render() {
    return (
     <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/setting" component={Setting}/>
        <Route path="/newpost" component={Newpost}/>
        <Route path="/articles" component={Article}/>

      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
