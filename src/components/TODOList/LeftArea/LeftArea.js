import React from 'react';
import style from './LeftArea.module.css';
import SortTask from "./SortTask/SortTask"
import NewTask from '../NewTask/NewTask'
//<NewTask/>

const LeftArea = (props) => {
    console.log(props)
      return (
        <div className="col-4">
            
            <div className= {style.left}>
            <SortTask tasks = {props.tasks} uid = {props.uid}/>
            <NewTask/>
            </div>
        </div>
    );
}


export default LeftArea;
