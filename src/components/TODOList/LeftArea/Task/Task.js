import React from 'react';
import style from './Task.module.css';
import ButDelete from "../../ButDelete/ButDelete"
import { NavLink } from "react-router-dom"


const Task = (props) => {
    //console.log(props.task);
    
    return (
        <div className={style.task}>
            <NavLink to={props.to} className = {style.a} id = {props.id} value = {props.value}>{props.value}</NavLink>
            <ButDelete />
        </div>
    );
}

export default Task;