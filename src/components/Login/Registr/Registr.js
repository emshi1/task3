import React from 'react';
import style from "./Registr.module.css"
import { NavLink } from "react-router-dom"



function Registr() {
  return (
    <div className = {`${style.login} + col-3`}>
        <h3 className={style.h3}>Регистрация</h3>
      <input type = "text" placeholder = "Введите логин" className={style.input}></input>
      <input type = "password" placeholder = "Введите пароль" className={style.input}></input>
      <input type = "password" placeholder = "Повторите пароль" className={style.input}></input>
      <NavLink value = 'registr' className = "btn btn-primary" to="/">Зарегестрироваться</NavLink>
    </div>
  );
}

export default Registr;
