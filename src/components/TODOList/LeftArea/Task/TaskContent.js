import React from 'react';


const TaskContent = (props) =>{
let Item = props.map( i => <Content id = {i.id} value = {i.value} />)
}

export default TaskContent;