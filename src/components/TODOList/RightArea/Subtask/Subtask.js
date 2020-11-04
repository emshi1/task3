import React from 'react';
import DeleteSub from '../../Delete/DeleteSub';
import style from './Subtask.module.css';

const Subtask = ({subtask,key}) => {
    
    let dateS = subtask.date.seconds
    let date = new Date (dateS * 1000)
    let dateFull = date.getDate() + '.' + date.getMonth() 
    + '.' + date.getFullYear() + ' ' + date.getHours() 
    + ':' + date.getMinutes();
    //console.log(subtask)
    //console.log(key)
    return (
        <div className={style.subtask}>
            <input type="checkbox"></input>
            <div className={style.content}>
                <input type="checkbox" className={style.check} disabled="disabled" defaultChecked = {subtask.urgently}></input>
                <span>{subtask.title}</span>
                <span className={style.date}>{dateFull}</span>
                <DeleteSub  title = {subtask.title} />
            </div>
        </div>
    );
}

export default Subtask;