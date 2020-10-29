import React from 'react';
import style from './NewTask.module.css';
import ButAdd from "../ButAdd/ButAdd"


const NewTask = (props) =>{

    console.log(props);
    let element = React.createRef();

    let addTask = () =>{
         props.addTask();
         element.current.value = '';
    }
    let onNewChange = (e) => {
        
        let text = element.current.value;
        props.postTask(text);
        
    }


    return (
        <span className={style.add}>
            <input onChange = {onNewChange} className={style.text} ref = {element}></input>
            <input type="checkbox" className = "checkbox"></input>
            <ButAdd onClick={addTask}/>
        </span>
    );
}

export default NewTask;