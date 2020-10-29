import React from 'react';
//import './App.css';
import TODOList from "./components/TODOList/TODOList"
import Login from "./components/Login/LoginForm/LoginForm"
import Registr from "./components/Login/Registr/Registr"
import {Route} from "react-router-dom"


const App = (props) => {
  console.log(props);
  return (
    <div className="App">
      <Route exact path ="/" render = { () => <Login/>}/>
      <Route path ="/TODOlist" render = { () => <TODOList store = {props.store}/> }/>
      <Route exact path = "/Registr" render = { () => <Registr/>}/>
    </div>
  );
}

export default App;
