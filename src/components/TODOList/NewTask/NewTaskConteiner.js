import React from 'react';
import {  addTaskActionCreator, pushTaskActionCreator} from '../../../redux/task-reducer';
import NewTask from './NewTask';


const NewTaskConteiner = (props) =>{
    let state = props.store.getState();

    let addTask = () =>{
         props.store.dispatch(pushTaskActionCreator());
    }
    let onNewChange = (text) => {
        
        let action = addTaskActionCreator(text);
        props.store.dispatch(action);
       }

    return (
        <NewTask postTask = {onNewChange} addTask = {addTask} props = {state}/>
    );
}

export default NewTaskConteiner;