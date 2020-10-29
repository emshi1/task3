import React from 'react';
import style from './LeftArea.module.css';
import SortTask from "./SortTask/SortTask"
import Task from "./Task/Task"
import NewTaskConteiner from '../NewTask/NewTaskConteiner';
//<NewTask/>

const LeftArea = (props) => {
    console.log(props.store.getState());
    let Item = props.store.getState().taskReducer.tasks.map( i => <Task to={`/TODOList/${i.id}`} id = {i.id} value = {i.value}>{i.value}</Task>)
    return (
        <div className="col-4">
            <div className= {style.left}>
            <SortTask/>
            {Item}
            <NewTaskConteiner store = {props.store}/>
            </div>
        </div>
    );
}

export default LeftArea;