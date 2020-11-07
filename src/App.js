import React from 'react';
import TODOList from "./components/TODOList/TODOList"
import Login from "./components/Login/LoginForm/LoginForm"
import Registr from "./components/Login/Registr/Registr"
import { Route, withRouter } from "react-router-dom"
import Navbar from './components/Nav/Navbar'


const todo = () => {
  return (
    < div >
      <Navbar />
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/Registr" render={() => <Registr />} />
      <Route path="/" render={() => <TODOList />}/>
    </div >
  )
}

const TodoWithRouter = withRouter(todo)

const App = () => {

  return (
    <div className="App">
      <TodoWithRouter />
    </div>
  );
}

export default App;
