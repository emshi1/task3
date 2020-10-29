import React from 'react';
import style from "./LoginForm.module.css"
import { NavLink } from "react-router-dom"



function LoginForm() {
  return (
    <div className = {`${style.login} + col-3`}>
        <h3 className={style.h3}>Вход</h3>
      <input type = "text" placeholder = "Введите логин" className={style.input}></input>
      <input type = "password" placeholder = "Введите пароль" className={style.input}></input>
      <div><NavLink to = "/Registr" className = {style.a}>Нет аккаунта?</NavLink></div>
      <NavLink to = "/TODOList" value = 'Войти' className = "btn btn-primary">Войти</NavLink>
    </div>
  );
}

export default LoginForm;
