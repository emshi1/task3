import React, { Component } from 'react';
import style from "./Registr.module.css"
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { registr } from '../../../store/actions/authActions';

class Registr extends Component{

  state = {email: '', password: ''}

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.registr(this.state)
  }
  render () {
    const {auth, authError} = this.props;
    if(auth.uid) return <Redirect to='/' />
  return (
    <form onSubmit ={this.handleSubmit} className = {`${style.login} + col-3`}>
        <h3 className={style.h3}>Регистрация</h3>
      <input onChange={this.handleChange} id = 'email' type = "email" placeholder = "Введите логин" className={style.input}></input>
      <input onChange={this.handleChange} id = 'password' type = "password" placeholder = "Введите пароль" className={style.input}></input>
      <button className = "btn btn-primary">SignUp</button>
      <div className={style.red}>
          {authError ? <p>{authError}</p> : null}
      </div>
    </form>
  );
}
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registr: (newUser) => dispatch(registr(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registr);
