import React from 'react';
import style from './Task.module.css';
import DeleteTask from "../../Delete/DeleteTask"
import { NavLink } from "react-router-dom"


const Task = (Task) => {
    /*let elem;
    if (Task.done === 'done') {
        elem = document.getElementById('task');
        elem.style.backgroundColor='#c7c7c7'
    } else if (Task.done === 'almoust') {
        elem = document.getElementById('task');
        elem.style.backgroundColor='#bae6be'
    }
    else {
        elem.style.backgroundColor='none'
    }*/

    return (
        <div className={style.task} id = 'task'>
            <NavLink to={`/${Task.task.id}`} className = {style.a} >{Task.task.title}</NavLink>
            <DeleteTask id = {Task.task.id} task = {Task.task.title}/>
        </div>
    );
}

export default Task;