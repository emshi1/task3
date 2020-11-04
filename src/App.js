import React from 'react';
import TODOList from "./components/TODOList/TODOList"
import Login from "./components/Login/LoginForm/LoginForm"
import Registr from "./components/Login/Registr/Registr"
import {Route, Switch} from "react-router-dom"
import Navbar from './components/Nav/Navbar'


const App = () => {

  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route  path ="/login" render = { () => <Login/>}/>
      <Route  path ="/"render = { () => <TODOList/>}/>
      <Route  path = "/Registr" render = { () => <Registr/>}/>
      </Switch>
    </div>
  );
}

export default App;
