import React from 'react';
import style from "./RightArea.module.css";
import Subtask from "./Subtask/Subtask"
import NewSubtask from "../NewTask/NewSubtask"
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'


const RightArea = (props) => {
    const {task} = props;
    const {parrent} = props;
   const {sub} = props;
   const keys = Object.keys(sub);
   let count = 0
    if (task){
        return(
        <div className = "col-8">
            <div className = {style.right}>
            <h3 className = {style.h3}>{task.title}</h3>
            {sub  && Object.values(sub).map(t => { if (t.parrent === parrent) {
                //console.log(keys[count++])
                return (
                    <Subtask subtask = {t} key = {keys[count++]}/>
                )
            }
            })}
            <NewSubtask parrent = {parrent}/>
            </div>
        </div>
        )
    } else {
        return (<div>
            <p>Loading project...</p>
            <NewSubtask parrent = {parrent}/>
            </div>
            )
    }
}

const mapStateToProps = (state, ownProps) => {
   // console.log(state)
    const id = ownProps.match.params.id;
    const tasks = state.firestore.data.tasks;
    const subtask = state.firestore.data.subtask;
    const task = tasks ? tasks[id] : null ;
   // const sub = subtask.parrent === tasks[id] ? subtask : null;
    return {
        task: task,
        parrent: id,
        sub: subtask
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'tasks'},
        {collection: 'subtask'},
    ])
)(RightArea);