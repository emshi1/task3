import React from 'react';
import style from "./RightArea.module.css";
import Subtask from "./Subtask/Subtask"
import NewTask from "../NewTask/NewTask"

const RightArea = (props) => {
    
    //let Item = props.store.getState().taskReducer.tasks.map( i => i.subtask.map (s => <Subtask id = {s.id} value = {s.value} time = {s.time}/>));
    //console.log(Item);
    return (
        
        <div className = "col-8">
            <div className = {style.right}>
                <h3 className = {style.h3}>kas</h3>
            <Subtask/>
            
            </div>
        </div>
    );
}

export default RightArea;