import React from 'react';


const SubtaskContent = (props) =>{
let Item = props.map( i => <Content id = {i.id} value = {i.value + ' ' + i.time} />)
}

export default SubtaskContent;