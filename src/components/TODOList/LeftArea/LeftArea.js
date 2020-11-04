import React from 'react';
import style from './LeftArea.module.css';
import SortTask from "./SortTask/SortTask"
import Task from "./Task/Task"
import NewTask from '../NewTask/NewTask'
//<NewTask/>

const LeftArea = ({tasks, uid}) => {
      return (
        <div className="col-4">
            
            <div className= {style.left}>
            <SortTask/>
            {tasks && tasks.map(t => {
                if (uid === t.uid){
                return (
                    <Task task = {t} key = {t.id}/>
                )
            }
            }
            )}
            <NewTask/>
            </div>
        </div>
    );
}


export default LeftArea;
