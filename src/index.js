import React from 'react';
import './index.css';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"


let rerender = (state) => {
  console.log(store.getState());
    ReactDOM.render(
        <BrowserRouter>
          <App store = {store} state = {state} dispatch = {store.dispatch.bind(store)} store = {store}/>
        </BrowserRouter>,
        document.getElementById('root')
      );
      
}

rerender(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerender(state);
});



