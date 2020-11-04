import React, { Component } from 'react';
import style from "./LoginForm.module.css"
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { login } from '../../../store/actions/authActions';

class LoginForm extends Component {

  state = { email: '', password: '' }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state)
  } 
  
  render() {
    const { authError, auth} = this.props
    if(auth.uid) return <Redirect to='/' />
    return (
      <form onSubmit={this.handleSubmit} className={`${style.login} + col-3`}>
        <h3 className={style.h3}>Вход</h3>
        <input onChange={this.handleChange} id='email' type="email" placeholder="Введите логин" className={style.input}></input>
        <input onChange={this.handleChange} id='password' type="password" placeholder="Введите пароль" className={style.input}></input>
        <div><NavLink to="/Registr" className={style.a}>Нет аккаунта?</NavLink></div>
        <button className="btn btn-primary">Login</button>
        <div className={style.red}>
          {authError ? <p>{authError}</p> : null}
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (creds) => dispatch(login(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
