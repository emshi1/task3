import React from 'react';
import style from './Subtask.module.css';
import ButDelete from "../../ButDelete/ButDelete"

const Subtask = (props) => {
    //console.log(props);
    return (
        <div className={style.subtask}>
            <input type="checkbox"></input>
            <div className={style.content}>
                <input type="checkbox" className={style.check} defaultChecked = "checked"></input>
                {props.value + '\t' + props.time}
                <ButDelete />
            </div>
        </div>
    );
}

export default Subtask;