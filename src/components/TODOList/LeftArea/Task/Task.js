import React from 'react';
import style from './Task.module.css';
import DeleteTask from "../../Delete/DeleteTask"
import { NavLink } from "react-router-dom"


const Task = (Task) => {
    let stle
    if (Task.task.done === 'done') {
        stle = style.done;
    } else if (Task.task.done === 'almoust') {
        stle = style.almoust;
    }
    else
        stle = style.task;

    return (
        <div className={stle} id='task'>
            <NavLink to={`/${Task.task.id}`} className={style.a} >{Task.task.title}</NavLink>
            <DeleteTask id={Task.task.id} task={Task.task.title} />
        </div>
    );
}

export default Task;