import React from 'react';
import DeleteSub from '../../Delete/DeleteSub';
import style from './Subtask.module.css';

const Subtask = (props) => {
    //console.log(props)
    let dateS = props.subtask.date.seconds
    let date = new Date (dateS * 1000)
    let dateFull = date.getDate() + '.' + date.getMonth() 
    + '.' + date.getFullYear() + ' ' + date.getHours() 
    + ':' + date.getMinutes();
    
    return (
        <div className={style.subtask}>
            <input type="checkbox"></input>
            <div className={style.content}>
                <input type="checkbox" className={style.check} disabled="disabled" defaultChecked = {props.subtask.urgently}></input>
                <span>{props.subtask.title}</span>
                <span className={style.date}>{dateFull}</span>
                <DeleteSub  title = {props.subtask.title} id = {props.id} parrent = {props.parrent}/>
            </div>
        </div>
    );
}

export default Subtask;